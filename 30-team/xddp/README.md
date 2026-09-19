---
id: GRP-0340
name: XDDP
name_ja: 派生開発プロセス
kind: process
group: true
rights:
  holder: 清水吉男 / AFFORDD（派生開発推進協議会）
  redistribution: unknown
  derivation: unknown
  conditions: 記法と方法論は採用してよい。本文の転記と翻案をしない
  policy: 本文を転記も言い換えもしない
  verified: 未確認
---

# XDDP — 派生開発プロセス

既存のソフトウェアへ変更を加える開発を対象とするプロセス。清水吉男氏が提唱した。

## 3点セット

XDDP の骨格である。

| 確認すること | 成果物 |
| --- | --- |
| **What / Why** — 何を、なぜ変えるか | [変更要求仕様書](change-request-spec.md)（USDM 形式） |
| **Where** — どこが影響を受けるか | [スペックアウトと TM](spec-out-and-tm.md) |
| **How** — どのように変えるか | [変更設計書](change-design-doc.md) |

## そのほかの要素

| ファイル | 内容 |
| --- | --- |
| [コーディング留保](coding-restraint.md) | 3点セットをレビューしてからコードを変更する |
| [プロセスの分離](process-separation.md) | 既存機能の変更と新機能の追加を分ける |
| [PFD](../process-modeling/pfd.md) | XDDP の文脈で紹介されるが専用ではないため別の場所に置く |

## 前提

**母体が無いと適用できない。** `origin: derivative` である。新規開発には使えない。

姉妹プロジェクト `paper-repro` は新規開発であるため、XDDP のうち採用できたのは
USDM と TM の2つだけである。

## テーラリング

**「省略」ではなく「代替」として扱う。** AFFORDD に記録されている事例は、
従来の設計書を変更設計書として活用したものであり、成果物を作らないのではなく
既にあるものを充てている。

成果物の作成をバイパスすれば、コーディング留保という規律が成立しない。

## 適用範囲

**組込み専用ではない。** 自治体向け Web システムへの適用事例が公開されている。

## 権利

```yaml
rights:
  holder: 清水吉男 / AFFORDD（派生開発推進協議会）
  redistribution: unknown
  derivation: unknown
  conditions: 記法と方法論は採用してよい。本文の転記と翻案をしない
  policy: 本文を転記も言い換えもしない
  verified: 未確認
```
