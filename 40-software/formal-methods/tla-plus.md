---
id: MTH-0474
name: TLA+
name_ja: TLA+
kind: notation
describes: software
target_phase: [external-design, internal-design]
origin: both
formality: formal
verification:
  method: both
  scope: bounded
  tools: [TLC, TLAPS, PlusCal]
status: referenced-only
applicable_to_solo: true
relates_to: []
rights:
  holder: Leslie Lamport ほか
  redistribution: unknown
  derivation: unknown
  conditions: 資料とツールの配布条件を確認する
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: Leslie Lamport が公開している資料とツール。URL 未取得
    verify: manual
    verified: 未確認
  - title: Leslie Lamport『Specifying Systems』Addison-Wesley, 2002。書誌未再確認
    verify: manual
    verified: 未確認
---

# TLA+

並行・分散システムの振る舞いを検証する形式手法。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| Leslie Lamport が公開している資料とツール。URL 未取得 | — | 未確認 |
| Leslie Lamport『Specifying Systems』Addison-Wesley, 2002。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 時相論理と集合論にもとづく
- 並行系・分散系の振る舞いを対象とする
- **TLC はモデル検査で有限状態を探索する。** 無限の状態空間に対する証明は TLAPS が担う
- PlusCal はアルゴリズム記述言語で、TLA+ に変換される

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
