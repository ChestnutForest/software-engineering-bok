---
id: MTH-0431
name: Domain-Driven Design
name_ja: ドメイン駆動設計
kind: design-approach
target_phase: [external-design, internal-design]
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
  - id: MTH-0432
    relation: requires
    note: オブジェクト指向を前提とする
rights:
  holder: Eric Evans / Addison-Wesley
  redistribution: prohibited
  derivation: prohibited
  conditions: 書籍の本文は著作物である
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: Eric Evans『Domain-Driven Design』Addison-Wesley, 2003。書誌未再確認
    verify: manual
    verified: 未確認
---

# ドメイン駆動設計

業務ドメインのモデルを設計の中心に置くアプローチ。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| Eric Evans『Domain-Driven Design』Addison-Wesley, 2003。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- オブジェクト指向を前提とする。軸を独立に選べるわけではない
- 複雑な業務ドメインを持つプロダクトに向く

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
