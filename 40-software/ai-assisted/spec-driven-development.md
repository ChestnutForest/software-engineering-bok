---
id: MTH-0481
name: Spec-Driven Development
name_ja: 仕様駆動開発
kind: practice
target_phase: [requirements, construction]
origin: both
formality: informal
status: registered
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: untraced
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to: []
rights:
  holder: 各ツールの提供元
  redistribution: unknown
  derivation: unknown
  conditions: ツールごとに条件が異なる。個別に確認する
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://github.com/github/spec-kit
    title: GitHub Spec Kit
    verify: manual
    verified: 2026-09-17
---

# 仕様駆動開発

仕様を先に書き、AI エージェントに実装させる進め方。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| GitHub Spec Kit | <https://github.com/github/spec-kit> | 2026-09-17 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **2025年以降の語である。** ツールも語義も短期間で変わる
- AI エージェントへ仕様を渡す進め方を指す
- **TDD とは由来も対象も異なる。** 並置しない
- **個人の規律ではない。** エージェントへの指示の与え方である
- 確認日を必ず添える。添えられないものは登録しない

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **痕跡なし** | 走査で出現ゼロだった。**検討したうえで却下したのではなく、検討の記録が無い。** |

### 痕跡が無いということ

走査で出現ゼロだった。**検討したうえで却下したのではなく、検討の記録が無い。**
`not-adopted`（判断した記録がある）とは区別する。

### 注意

⚠️ **実態としてはこの実践に近い。** `paper-repro` は Claude Code・Codex・Antigravity IDE で
開発しており、`AGENTS.md` と `CLAUDE.md` が AI エージェントへの指示を持つ。
**しかし手法として名指しし、その定義に照らして採否を判断した記録は無い。**

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第3節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
