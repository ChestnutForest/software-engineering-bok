#!/usr/bin/env node
/**
 * methods の Front Matter から views/ の一覧を生成する。
 *
 * 手で編集しない。このスクリプトで生成し直す。
 *
 *   node scripts/generate-views.mjs
 *
 * 注意: sources の verify が manual のものは到達確認を行わない。
 * IPA・AFFORDD・WARP・Mermaid の各サイトは自動取得を制限しているため、
 * 自動で通ったように見せてはいけない。
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Windows では URL.pathname が "/C:/..." を返すため、そのまま使うとパスが壊れる。
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const LAYERS = ["10-organization", "20-system", "30-team", "40-software", "50-individual"];

async function walk(dir) {
  const out = [];
  let items;
  try {
    items = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    return out; // 階層がまだ無い場合だけ許す
  }
  for (const it of items) {
    const p = join(dir, it.name);
    if (it.isDirectory()) out.push(...(await walk(p)));
    else if (it.name.endsWith(".md")) out.push(p);
  }
  return out;
}

/** 最小限の Front Matter 読み取り。ネストは2段まで。 */
function parseFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  let key = null;
  let listKey = null;
  for (const raw of m[1].split("\n")) {
    if (!raw.trim() || raw.trimStart().startsWith("#")) continue;
    const indent = raw.length - raw.trimStart().length;
    const line = raw.trim();
    if (indent === 0) {
      listKey = null;
      const i = line.indexOf(":");
      if (i < 0) continue;
      const k = line.slice(0, i).trim();
      const v = line.slice(i + 1).trim();
      key = k;
      if (v === "") fm[k] = {};
      else fm[k] = v;
    } else if (key) {
      if (line.startsWith("- ")) {
        if (!Array.isArray(fm[key])) fm[key] = [];
        fm[key].push({});
        listKey = fm[key][fm[key].length - 1];
        const rest = line.slice(2);
        const i = rest.indexOf(":");
        if (i > 0) listKey[rest.slice(0, i).trim()] = rest.slice(i + 1).trim();
      } else {
        const i = line.indexOf(":");
        if (i < 0) continue;
        const k = line.slice(0, i).trim();
        const v = line.slice(i + 1).trim();
        if (listKey) listKey[k] = v;
        else {
          if (typeof fm[key] !== "object" || Array.isArray(fm[key])) fm[key] = {};
          fm[key][k] = v;
        }
      }
    }
  }
  return fm;
}

const entries = [];
for (const layer of LAYERS) {
  for (const file of await walk(join(ROOT, layer))) {
    const text = await readFile(file, "utf8");
    const fm = parseFrontMatter(text);
    if (!fm || !fm.id) continue;
    fm._path = relative(ROOT, file).split("\\").join("/");
    fm._layer = layer;
    entries.push(fm);
  }
}
if (entries.length === 0) {
  console.error(`エントリが1件も読めなかった。ROOT を確認すること: ${ROOT}`);
  process.exit(1);
}
entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));

/** グループ README は権利の継承元であり、手法そのものではない。 */
const methods = entries.filter((e) => e.group !== "true");

const header = (title, lead) =>
  `# ${title}\n\n${lead}\n\n> **生成物である。手で編集しない。**\n> \`node scripts/generate-views.mjs\` で生成し直す。\n\n`;

const link = (e) => `[${e.name_ja}](../${e._path})`;

/** rights を継承元まで1段だけ辿る。多段継承は禁じている。 */
async function resolveRights(e) {
  const r = e.rights;
  if (r && typeof r === "object" && r.inherit) {
    const base = dirname(join(ROOT, e._path));
    try {
      const text = await readFile(join(base, r.inherit), "utf8");
      const fm = parseFrontMatter(text);
      if (fm && fm.rights && !fm.rights.inherit) return [fm.rights, r.inherit];
    } catch {
      /* 継承元を読めない */
    }
    return [null, r.inherit];
  }
  return [r && typeof r === "object" ? r : null, null];
}

await mkdir(join(ROOT, "views"), { recursive: true });

// by-kind
{
  const byKind = {};
  for (const e of methods) (byKind[e.kind] ??= []).push(e);
  let out = header("種別ごとの一覧", "`kind` で分類する。**1つの手法は1つの `kind` を持つ。**");
  for (const k of Object.keys(byKind).sort()) {
    out += `## ${k}\n\n| 手法 | 階層 | 記述の対象 | 状態 |\n| --- | --- | --- | --- |\n`;
    for (const e of byKind[k])
      out += `| ${link(e)} | ${e._layer} | ${e.describes ?? "—"} | ${e.status} |\n`;
    out += "\n";
  }
  await writeFile(join(ROOT, "views/by-kind.md"), out, "utf8");
}

// by-formality
{
  const order = ["formal", "semi-formal", "informal"];
  let out = header(
    "形式性ごとの一覧",
    "**`semi-formal` は形式手法ではない。** 記述の厳密さと、検証の可能性は別のことである。"
  );
  for (const f of order) {
    const list = methods.filter((e) => e.formality === f);
    if (!list.length) continue;
    out += `## ${f}\n\n| 手法 | 検証の方法 | 範囲 | 種別 |\n| --- | --- | --- | --- |\n`;
    for (const e of list) {
      const v = e.verification && typeof e.verification === "object" ? e.verification : {};
      out += `| ${link(e)} | ${v.method ?? "—"} | ${v.scope ?? "—"} | ${e.kind} |\n`;
    }
    out += "\n";
  }
  await writeFile(join(ROOT, "views/by-formality.md"), out, "utf8");
}

// by-rights
{
  let out = header(
    "権利ごとの一覧",
    "**公開の前にここを見る。** 継承は展開して出し、継承元も併記する。\n`verified` が `未確認` のものは `status` を `referenced-only` から動かさない。"
  );
  out += "| 手法 | 権利者 | 複製・再配布 | 改変・翻案 | 確認 | 継承元 |\n| --- | --- | --- | --- | --- | --- |\n";
  for (const e of entries) {
    const [r, from] = await resolveRights(e);
    out += `| ${link(e)} | ${r?.holder ?? "⚠️ 未解決"} | ${r?.redistribution ?? "—"} | ${r?.derivation ?? "—"} | ${r?.verified ?? "—"} | ${from ?? "—"} |\n`;
  }
  await writeFile(join(ROOT, "views/by-rights.md"), out, "utf8");
}

// by-status
{
  let out = header("状態ごとの一覧", "`referenced-only` が既定である。");
  for (const s of ["registered", "referenced-only", "out-of-scope"]) {
    const list = methods.filter((e) => e.status === s);
    if (!list.length) continue;
    out += `## ${s}（${list.length}件）\n\n| 手法 | 階層 | 個人での適用 | 対象工程 |\n| --- | --- | --- | --- |\n`;
    for (const e of list)
      out += `| ${link(e)} | ${e._layer} | ${e.applicable_to_solo} | ${e.target_phase} |\n`;
    out += "\n";
  }
  await writeFile(join(ROOT, "views/by-status.md"), out, "utf8");
}

console.log(`entries: ${entries.length}`);
