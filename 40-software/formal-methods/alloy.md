---
id: MTH-0473
name: Alloy
name_ja: Alloy
kind: notation
describes: software
target_phase: [requirements, external-design]
origin: both
formality: formal
verification:
  method: model-checking
  scope: bounded
  tools: [Alloy Analyzer]
status: referenced-only
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: untraced
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0471
    relation: succeeds
    note: Z の影響を受けて作られた
rights:
  holder: MIT / Daniel Jackson ほか
  redistribution: unknown
  derivation: unknown
  conditions: ツールの配布条件と著書の扱いを分けて確認する
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: https://alloytools.org/ 。URL 未再確認
    verify: manual
    verified: 未確認
  - title: Daniel Jackson『Software Abstractions』MIT Press, 2006（第2版 2012）。書誌未再確認
    verify: manual
    verified: 未確認
---

# Alloy

有限の範囲で反例を探す形式手法。**証明する道具ではない。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| https://alloytools.org/ 。URL 未再確認 | — | 未確認 |
| Daniel Jackson『Software Abstractions』MIT Press, 2006（第2版 2012）。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 一階関係論理にもとづく。Z の影響を受けて作られた
- **指定した有限の範囲（scope）で反例を探す。** 反例が無いことは正しさの証明ではない
- 設計の探索と、構造・制約の確認に向く

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **痕跡なし** | 走査で出現ゼロだった。**検討したうえで却下したのではなく、検討の記録が無い。** |

### 痕跡が無いということ

走査で出現ゼロだった。**検討したうえで却下したのではなく、検討の記録が無い。**
`not-adopted`（判断した記録がある）とは区別する。

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第3節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
