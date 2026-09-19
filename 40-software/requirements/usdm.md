---
id: MTH-0421
name: USDM
name_ja: 要求仕様記述法
kind: notation
describes: requirements
target_phase: [requirements]
origin: both
formality: semi-formal
status: registered
applicable_to_solo: true
relates_to:
  - id: MTH-0342
    relation: contained-by
    note: XDDP の変更要求仕様書は USDM 形式で書く
rights:
  holder: 清水吉男 / AFFORDD（派生開発推進協議会）
  redistribution: unknown
  derivation: unknown
  conditions: 記法という方法論は採用してよい。小冊子の本文は転記も言い換えもしない
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-basic_1.3.pdf
    title: USDM 小冊子 基礎編 ver 1.3（2016）
    verify: manual
    verified: 2026-08-26
  - url: https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-appendix_1.3.pdf
    title: USDM 小冊子 付録編 ver 1.3（2016）
    verify: manual
    verified: 2026-08-26
  - url: https://gihyo.jp/book/2010/978-4-7741-4257-9
    title: 清水吉男『【改訂第2版】要求を仕様化する技術・表現する技術』技術評論社, 2010（原典）
    verify: manual
    verified: 2026-08-26
---

# 要求仕様記述法

要求を階層化して記述する記法。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| USDM 小冊子 基礎編 ver 1.3（2016） | <https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-basic_1.3.pdf> | 2026-08-26 |
| USDM 小冊子 付録編 ver 1.3（2016） | <https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-appendix_1.3.pdf> | 2026-08-26 |
| 清水吉男『【改訂第2版】要求を仕様化する技術・表現する技術』技術評論社, 2010（原典） | <https://gihyo.jp/book/2010/978-4-7741-4257-9> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 要求・理由・説明・仕様グループ・仕様の5要素からなる階層構造
- 要求を動詞形の振る舞いとして書く
- **形式手法ではない。** 構造化された自然言語による記述法である
- XDDP の3点セットの1つ（変更要求仕様書）にあたる

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
