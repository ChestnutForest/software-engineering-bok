# 検証記録の索引

**ここは経緯である。現在の決定は [`../conventions/`](../conventions/) にある。**

## 一覧

| ID | 内容 | 状態 |
| --- | --- | --- |
| [REV-0001](rev-0001-methodology-selection-guide.md) | メソドロジー選択ガイド。6軸の定義 | 第7章の軸は `conventions/selection-axes.md` が現在の正 |
| [REV-0002](rev-0002-process-standards-and-boks.md) | プロセス標準と知識体系。権利制約と第7軸 | **第3.2章の権利の記述は REV-0010 が訂正** |
| [REV-0003](rev-0003-directory-structure.md) | ディレクトリ構成の初案 | **第7章の代替案は REV-0004 が置き換え** |
| [REV-0004](rev-0004-layered-tree-reconciled.md) | 階層ツリーと軸の両立 | **IPA ガイドの配置は REV-0010 が訂正** |
| [REV-0005](rev-0005-xddp-placement.md) | XDDP の配置。3点セットと第8軸 | **`pfd.md` の位置は REV-0007 が変更** |
| [REV-0006](rev-0006-pfd-placement.md) | PFD の配置。記法とプロセスの区別 | **昇格先の名称は REV-0007 が `process-modeling` に変更** |
| [REV-0007](rev-0007-spem-placement.md) | SPEM の配置。RUP との前後関係 | 有効 |
| [REV-0008](rev-0008-formal-methods.md) | 形式手法。`formality` 欄の追加 | 有効 |
| [REV-0009](rev-0009-cross-repository-audit.md) | リポジトリ横断監査 | **第1章と第2章に訂正あり（本文に明記）** |
| [REV-0010](rev-0010-ipa-guidelines.md) | IPA ガイドライン。`rights` 欄の分解 | 有効 |

## 上書きされた決定

**REV を読むときは、必ずこの表で上書きの有無を確かめること。**

| 上書きされた決定 | どこで | 現在の正 |
| --- | --- | --- |
| REV-0003 第7章の平坦構成 | REV-0004 | `conventions/layers.md` |
| REV-0006 の昇格先名 `process-notations` | REV-0007 | `30-team/process-modeling/` |
| REV-0005・0006 の `pfd.md` の位置 | REV-0007 | `30-team/process-modeling/pfd.md` |
| REV-0004 の `ipa-agreement-guide` の配置 | REV-0010 | `40-software/design/agreement-forming/` |
| REV-0002 の権利の記述 | REV-0010 | `conventions/entry-format.md` の `rights` |
| REV-0009 の第1章・第2章 | REV-0009 自身（2度の訂正） | 同文書の訂正ブロック |

## 繰り返された指摘

同じ観点が複数回抜けた。**対策は仕組みで打ってある。**

| 観点 | 回数 | 対策 |
| --- | --- | --- |
| スコープ未確定のまま構成を積む | 7回 | ADR-0002 |
| 権利制約の欠落 | 6回 | `rights` 欄を必須にした |
| 形式手法との誤った対比 | 3回 | `formality` 欄を設けた |
| IPA ガイドの対象工程の誤り | 3回 | `target_phase` 欄と `design/README.md` |
| UML の置き場が無い | 4回 | `40-software/notations/uml.md` |
| JSD を構造化手法の代表とする | 3回 | ファイルを分けた |
