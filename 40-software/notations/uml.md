---
id: MTH-0451
name: UML
name_ja: 統一モデリング言語
kind: notation
describes: software
target_phase: [external-design, internal-design]
origin: both
formality: semi-formal
status: registered
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: referenced
    scope: PlantUML 連携の検討材料としての言及1件のみ
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0202
    relation: contains
    note: SysML は UML プロファイルとして定義される
rights:
  holder: Object Management Group (OMG)
  redistribution: unknown
  derivation: unknown
  conditions: 仕様書は入手できるが本文は著作物である。要確認
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://www.omg.org/spec/UML/
    title: OMG UML 仕様
    verify: manual
    verified: 2026-09-17
---

# 統一モデリング言語

ソフトウェアの構造と振る舞いを記述する記法。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| OMG UML 仕様 | <https://www.omg.org/spec/UML/> | 2026-09-17 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 1997年11月に OMG の標準として採択
- **プロセスを規定しない。** 記法であって開発手法ではない
- **形式手法ではない**

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **参照のみ** | PlantUML 連携の検討材料としての言及1件のみ |

### 注意

**`status: registered` であることは、どこかで使われていることを意味しない。**

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第2節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
