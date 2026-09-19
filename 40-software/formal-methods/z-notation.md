---
id: MTH-0471
name: Z notation
name_ja: Z 記法
kind: notation
describes: software
target_phase: [requirements, external-design]
origin: both
formality: formal
verification:
  method: theorem-proving
  scope: unbounded
  tools: [CZT, Z/EVES]
status: referenced-only
applicable_to_solo: true
relates_to:
  - id: MTH-0473
    relation: succeeds
    note: Alloy は Z の影響を受けて作られた
rights:
  holder: ISO / IEC
  redistribution: permitted
  derivation: unknown
  conditions: ISO/IEC 13568:2002 は ISO の ITTF サイトから無償で入手できる。技術正誤票も同様。要確認
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: ISO/IEC 13568:2002。ITTF サイトから入手する。URL 未取得
    verify: manual
    verified: 未確認
  - title: J. M. Spivey『The Z Notation: A Reference Manual』第2版, Prentice Hall, 1992。書誌未再確認
    verify: manual
    verified: 未確認
---

# Z 記法

集合論と述語論理にもとづく形式仕様記述言語。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| ISO/IEC 13568:2002。ITTF サイトから入手する。URL 未取得 | — | 未確認 |
| J. M. Spivey『The Z Notation: A Reference Manual』第2版, Prentice Hall, 1992。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- ZF 集合論と一階述語論理にもとづく
- 状態とデータの仕様を記述する
- **ISO 規格でありながら無償で入手できる。** VDM とは入手条件が違う

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
