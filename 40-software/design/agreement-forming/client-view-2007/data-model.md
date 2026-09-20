---
id: MTH-0464
name: Client View Guideline - データモデル編
name_ja: データモデル編
kind: guideline
target_phase: [external-design]
origin: both
formality: informal
status: referenced-only
applicable_to_solo: partial
adoption:
  - product: paper-repro
    state: referenced
    scope: 発注者ビューガイドライン（2007）の4編。references-usdm-ipa.md 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0461
    relation: contained-by
    note: 発注者ビューガイドラインの一部
rights:
  inherit: ./README.md
sources:
  - url: https://warp.ndl.go.jp/web/20130117225954/http://sec.ipa.go.jp/reports/20080710.html
    title: 発注者ビューガイドライン（IPA 旧サイト、WARP 保存版）
    verify: manual
    verified: 未確認
---

# データモデル編

データモデルに関する認識のずれを防ぐコツ。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| 発注者ビューガイドライン（IPA 旧サイト、WARP 保存版） | <https://warp.ndl.go.jp/web/20130117225954/http://sec.ipa.go.jp/reports/20080710.html> | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 公開は 2008年3月
- 独立した PDF の URL を持たない。WARP 保存版から辿る
- **現行ではない。** 参照すべきは後継の機能要件の合意形成ガイド

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **参照のみ** | 発注者ビューガイドライン（2007）の4編。`references-usdm-ipa.md` 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している |

### 注意

IPA 旧サイトは閉鎖済みで、国立国会図書館 WARP の保存版からのみ辿れる。
**`arch-guide` 配下6文書が REF-15（本ガイドライン）と REF-16 を併記しており、
閉鎖済みサイトの前身ガイドに準拠していることになっている。** 記録の食い違いであり、
[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第4.2章に記載がある。

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
