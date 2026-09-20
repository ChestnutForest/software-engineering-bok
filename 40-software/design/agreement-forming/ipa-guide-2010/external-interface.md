---
id: MTH-0446
name: IPA Agreement Guide - 外部インタフェース編
name_ja: 外部インタフェース編
kind: guideline
target_phase: [external-design]
origin: both
formality: informal
status: referenced-only
applicable_to_solo: partial
adoption:
  - product: paper-repro
    state: adopted
    scope: 工程成果物の名称と区分を採る
    artifacts:
      - docs/arch-guide/arc-interface.md
      - docs/arch-guide/arc-interface-list.md
      - docs/arch-guide/arc-interface-map.md
      - docs/arch-guide/interfaces
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0441
    relation: contained-by
    note: 機能要件の合意形成ガイドの一部
rights:
  inherit: ../README.md
sources:
  - url: https://www.ipa.go.jp/archive/files/000004513.pdf
    title: 外部インタフェース編
    verify: manual
    verified: 2026-08-10
---

# 外部インタフェース編

外部インタフェースに関する合意形成のコツ。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| 外部インタフェース編 | <https://www.ipa.go.jp/archive/files/000004513.pdf> | 2026-08-10 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **前身を持たない。** 技術領域が3つから6つへ拡張されたときに追加された
- 参照するのは工程成果物の名称に限る。コツの本文は扱わない

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **採用** | 工程成果物の名称と区分を採る |

### 該当する成果物

- [`arc-interface.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-interface.md)
- [`arc-interface-list.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-interface-list.md)
- [`arc-interface-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-interface-map.md)
- [`interfaces/`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/interfaces)

### 前提の読み替え

発注者と開発者が同一人物である

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
