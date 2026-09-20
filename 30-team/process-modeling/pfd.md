---
id: MTH-0312
name: PFD
name_ja: プロセスフローダイアグラム
kind: notation
describes: process
target_phase: []
origin: both
formality: semi-formal
status: referenced-only
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: not-adopted
    scope: 未採用と明記されている
    reason: 工程は roadmap.md が担う
    artifacts:
      - docs/roadmap.md
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0341
    relation: contained-by
    note: XDDP の要素として紹介される
  - id: MTH-0311
    relation: alternative-to
    note: SPEM はメタモデル、PFD は図法
rights:
  holder: 清水吉男 / AFFORDD（派生開発推進協議会）
  redistribution: unknown
  derivation: unknown
  conditions: 記法は採用してよい。本文の転記と翻案をしない
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf
    title: えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016）
    verify: manual
    verified: 2026-08-26
  - url: https://affordd.jp/previous/conference2010/xddp2010_P7.pdf
    title: XDDP による派生開発ソフトウェア品質向上の取り組み（Panasonic、19ページ）
    verify: manual
    verified: 2026-08-26
---

# プロセスフローダイアグラム

プロセスを図で記述する記法。**2件目の登録により `process-modeling/` へ昇格した。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | 2026-08-26 |
| XDDP による派生開発ソフトウェア品質向上の取り組み（Panasonic、19ページ） | <https://affordd.jp/previous/conference2010/xddp2010_P7.pdf> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 成果物と作業の依存関係を図で表す
- XDDP の文脈で紹介されるが、**XDDP 専用ではない**
- **記法であってプロセスではない。** プロセスを記述するものであり、プロセスそのものではない
- **形式手法ではない。** 曖昧さを減らす効果はあるが、排除するものではない
- 動作の詳細は一次資料を確認してから書く。未確認

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **未採用** | 未採用と明記されている |

### 理由

工程は `roadmap.md` が担う

### 該当する文書

- [`roadmap.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/roadmap.md)

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
