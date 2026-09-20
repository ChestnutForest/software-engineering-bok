---
id: MTH-0345
name: XDDP Coding Restraint
name_ja: コーディング留保
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: derivative
formality: informal
status: referenced-only
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: partial
    scope: 部分的に採用。 承認ゲート（REQ-C06）が同じ役割を担う
    artifacts:
      - docs/requirements-usdm.md
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to: []
rights:
  inherit: ./README.md
sources:
  - url: https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf
    title: えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016）
    verify: manual
    verified: 2026-08-26
  - url: https://gihyo.jp/book/2007/978-4-7741-3249-5
    title: 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007
    verify: manual
    verified: 2026-08-26
---

# コーディング留保

3点セットをレビューしてからコードを変更する規律。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | 2026-08-26 |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 「見つけ次第コーディング」による誤りと手戻りを防ぐことが狙いである
- **XDDP を XDDP たらしめる中核の概念である**
- テーラリングは「省略」ではなく「代替」として扱う。成果物の作成をバイパスすると、この規律が成立しない

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **部分採用** | **部分的に採用。** 承認ゲート（`REQ-C06`）が同じ役割を担う |

### 該当する成果物

- [`requirements-usdm.md の REQ-C06`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/requirements-usdm.md)

### 前提の読み替え

3点セットのうち2つ（変更設計書、変更要求仕様書）が無いため、レビュー対象が異なる

### 読み替えにより失われるもの

**3点セットをそろえてからコードに触るという本来の規律**

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
