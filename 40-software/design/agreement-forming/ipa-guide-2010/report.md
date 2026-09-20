---
id: MTH-0448
name: IPA Agreement Guide - 帳票編
name_ja: 帳票編
kind: guideline
target_phase: [external-design]
origin: both
formality: informal
status: referenced-only
applicable_to_solo: partial
adoption:
  - product: paper-repro
    state: out-of-scope
    scope: arc-artifact-order.md が対象外と明記している
    reason: 印刷帳票が存在しない
    artifacts:
      - docs/arch-guide/arc-artifact-order.md
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0441
    relation: contained-by
    note: 機能要件の合意形成ガイドの一部
rights:
  inherit: ../README.md
sources:
  - url: https://www.ipa.go.jp/archive/files/000004505.pdf
    title: 帳票編
    verify: manual
    verified: 2026-08-10
---

# 帳票編

帳票に関する合意形成のコツ。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| 帳票編 | <https://www.ipa.go.jp/archive/files/000004505.pdf> | 2026-08-10 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **前身を持たない。** 拡張時に追加された
- 参照するのは工程成果物の名称に限る。コツの本文は扱わない

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **対象外** | `arc-artifact-order.md` が**対象外**と明記している |

### 理由

印刷帳票が存在しない

### 該当する文書

- [`arch-guide/arc-artifact-order.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-artifact-order.md)

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
