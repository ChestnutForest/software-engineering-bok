---
id: MTH-0311
name: SPEM
name_ja: ソフトウェア及びシステムプロセス工学メタモデル
kind: metamodel
describes: process
target_phase: []
origin: both
formality: semi-formal
status: registered
applicable_to_solo: true
relates_to:
  - id: MTH-0301
    relation: describes
    note: SPEM 1.0 は RUP を記述対象の代表例として想定した
  - id: MTH-0312
    relation: alternative-to
    note: どちらもプロセスを記述するが、SPEM はメタモデル、PFD は図法
rights:
  holder: Object Management Group (OMG)
  redistribution: unknown
  derivation: unknown
  conditions: 仕様書は無償で入手できるが著作物である。要確認
  policy: 本文を転記も言い換えもしない
  verified: 2026-09-17
sources:
  - url: https://www.omg.org/spec/SPEM/2.0/
    title: OMG SPEM 2.0 仕様
    verify: manual
    verified: 2026-09-17
---

# ソフトウェア及びシステムプロセス工学メタモデル

プロセスを記述するためのメタモデル。概念そのものを定める。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| OMG SPEM 2.0 仕様 | <https://www.omg.org/spec/SPEM/2.0/> | 2026-09-17 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- SPEM 1.0 は2001年11月に OMG の標準として採択。SPEM 2.0 は2008年公開
- MOF にもとづき、UML を記法として用いる
- Method Content（再利用される資産）と Process（時間軸に沿って組み立てたもの）を分ける
- **enactment（計画と実行）そのものは扱わない。** 外部のシステムと組み合わせる
- **形式手法ではない。** 構造を定義するものであり、数学的な意味論による検証は提供しない
- ツールベンダーごとの採用が分散している

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
