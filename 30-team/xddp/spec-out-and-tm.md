---
id: MTH-0343
name: XDDP Spec-out and TM
name_ja: スペックアウトとトレーサビリティ・マトリクス
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: derivative
formality: informal
status: referenced-only
applicable_to_solo: true
adoption:
  - product: paper-repro
    state: tailored
    scope: 本来の用途（変更箇所の特定）から、工程の進捗管理へ用途を広げている
    artifacts:
      - docs/traceability-matrix.md
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to: []
rights:
  inherit: ./README.md
sources:
  - url: https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf
    title: えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016）
    verify: manual
    verified: 2026-08-26
  - url: https://gihyo.jp/book/2007/978-4-7741-3249-5
    title: 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007
    verify: manual
    verified: 2026-08-26
---

# スペックアウトとトレーサビリティ・マトリクス

3点セットの②。どこが影響を受けるかを特定する。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | 2026-08-26 |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 2026-08-26 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 変更仕様とモジュール・ファイル・関数を対応づける
- スペックアウトは TM を作る前段の作業である
- 姉妹プロジェクト paper-repro では、本来の用途（変更箇所の特定）から工程の進捗管理へ用途を広げている

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **テーラリングあり** | **本来の用途（変更箇所の特定）から、工程の進捗管理へ用途を広げている** |

### 該当する成果物

- [`traceability-matrix.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/traceability-matrix.md)

### 前提の読み替え

母体が無いため、変更箇所の特定という本来の用途では使えない

### 読み替えにより失われるもの

**変更の影響範囲を示す機能。新規開発では影響を受ける既存箇所が存在しない**

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第1節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
