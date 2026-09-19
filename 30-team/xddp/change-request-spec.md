---
id: MTH-0342
name: XDDP Change Request Spec
name_ja: 変更要求仕様書
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: derivative
formality: informal
status: referenced-only
applicable_to_solo: true
relates_to:
  - id: MTH-0421
    relation: contains
    note: USDM はこの成果物の記法にあたる
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

# 変更要求仕様書

3点セットの①。何を、なぜ変えるかを記す。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | 2026-08-26 |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **USDM 形式で書く。** 要求・理由・仕様を階層化し、Before / After で変更内容を明確にする
- XDDP の3点セットのうち What / Why を担う

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
