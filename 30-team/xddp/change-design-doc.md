---
id: MTH-0344
name: XDDP Change Design Document
name_ja: 変更設計書
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: derivative
formality: informal
status: referenced-only
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: not-adopted
    scope: 未採用
    reason: 新規開発で変更対象の母体が無い
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

# 変更設計書

3点セットの③。どのように変えるかを実装前に記す。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | 2026-08-26 |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- コード変更の具体的な方法を、実装の前に記述する
- トヨタ自動車の事例では、従来の設計書を変更設計書として活用するテーラリングが記録されている

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **未採用** | 未採用 |

### 理由

新規開発で変更対象の母体が無い

### 注意

**3点セットのうち採ったのは USDM とトレーサビリティ・マトリクスの2つである。**

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
