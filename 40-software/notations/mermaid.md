---
id: MTH-0452
name: Mermaid
name_ja: Mermaid
kind: notation
describes: software
target_phase: [requirements, external-design, internal-design]
origin: both
formality: semi-formal
status: registered
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: adopted
    scope: 全体で使用。実測した図種別は flowchart・erDiagram・stateDiagram-v2 の3種
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0202
    relation: describable-by
    note: Requirement Diagram が SysML 1.6 に準拠する
rights:
  holder: Mermaid プロジェクト
  redistribution: unknown
  derivation: unknown
  conditions: ツールの配布条件を確認する
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://mermaid.js.org/intro/
    title: Mermaid 公式ドキュメント
    verify: manual
    verified: 2026-08-10
  - url: https://mermaid.js.org/syntax/requirementDiagram.html
    title: Mermaid Requirement Diagram（SysML 1.6 準拠）
    verify: manual
    verified: 2026-08-10
  - url: https://www.drawio.com/blog/mermaid-updates/
    title: draw.io の Mermaid 編集機能
    verify: manual
    verified: 2026-08-10
---

# Mermaid

テキストで図を書く記法。**本リポジトリの作図に用いる。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| Mermaid 公式ドキュメント | <https://mermaid.js.org/intro/> | 2026-08-10 |
| Mermaid Requirement Diagram（SysML 1.6 準拠） | <https://mermaid.js.org/syntax/requirementDiagram.html> | 2026-08-10 |
| draw.io の Mermaid 編集機能 | <https://www.drawio.com/blog/mermaid-updates/> | 2026-08-10 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- Requirement Diagram は SysML 1.6 に準拠する
- **本リポジトリの作図記法として採用している**
- 図は、描画されるブロックと details で包んだソース表示の対で書く

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **採用** | 全体で使用。実測した図種別は `flowchart`・`erDiagram`・`stateDiagram-v2` の3種 |

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第1節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
