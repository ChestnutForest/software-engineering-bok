---
id: MTH-0433
name: Structured Analysis and Design
name_ja: 構造化分析・構造化設計
kind: paradigm
target_phase: [requirements, external-design, internal-design]
origin: both
formality: informal
status: registered
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: untraced
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0434
    relation: alternative-to
    note: JSD は別系統の手法である
rights:
  holder: 各著者 / 各出版社
  redistribution: prohibited
  derivation: prohibited
  conditions: 書籍の本文は著作物である
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: Tom DeMarco『Structured Analysis and System Specification』Yourdon Press, 1979。書誌未再確認
    verify: manual
    verified: 未確認
  - title: Edward Yourdon, Larry Constantine『Structured Design』Prentice Hall, 1979。書誌未再確認
    verify: manual
    verified: 未確認
---

# 構造化分析・構造化設計

機能を段階的に分割していく分析・設計の技法群。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| Tom DeMarco『Structured Analysis and System Specification』Yourdon Press, 1979。書誌未再確認 | — | 未確認 |
| Edward Yourdon, Larry Constantine『Structured Design』Prentice Hall, 1979。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **JSD とは別系統である。** 同じ節に並べない

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
