---
id: MTH-0203
name: Software Product Lines
name_ja: ソフトウェアプロダクトライン
kind: reuse-strategy
target_phase: [requirements, external-design, internal-design]
origin: derivative
formality: informal
status: referenced-only
applicable_to_solo: false
relates_to:
  - id: MTH-0341
    relation: alternative-to
    note: どちらも派生を扱うが、SPLE は資産の計画、XDDP は変更の実行
rights:
  holder: Carnegie Mellon University / SEI
  redistribution: unknown
  derivation: unknown
  conditions: 資料ごとに固有の許諾条件がある。個別に確認する
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://insights.sei.cmu.edu/library/software-product-lines-collection/
    title: SEI Software Product Lines Collection
    verify: manual
    verified: 2026-09-17
---

# ソフトウェアプロダクトライン

製品群に共通する資産を計画して設計する再利用戦略。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| SEI Software Product Lines Collection | <https://insights.sei.cmu.edu/library/software-product-lines-collection/> | 2026-09-17 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 共通部分（commonality）と可変部分（variability）を分け、コア資産を計画して設計する
- ドメインエンジニアリングとアプリケーションエンジニアリングの2つのライフサイクルを持つ
- **派生が起きる前に**資産を設計する。XDDP は既にある母体に変更を加える。時間軸が逆である
- 組織的な取り組みを前提とする

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
