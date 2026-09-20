# 採用の記録

**あるプロダクトがその手法をどこまで使っているか。** `status` とは別のことである。
`not-adopted`（判断した記録がある）と `untraced`（記録が無い）を区別する。

> **生成物である。手で編集しない。**
> `node scripts/generate-views.mjs` で生成し直す。

記録のある手法 41 件、記録の無い手法 15 件。

## 採用（adopted・6件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [要求仕様記述法](../40-software/requirements/usdm.md) | paper-repro | メイン要求12件・サブ要求21件を仕様IDまで展開。要求と仕様の階層、理由の明記、範囲の記述を採る | docs/methodology-map.md | 2026-09-11 |
| [システム振舞い編](../40-software/design/agreement-forming/ipa-guide-2010/system-behavior.md) | paper-repro | 共通ルールを BR-nn 体系で持つ | docs/methodology-map.md | 2026-09-11 |
| [画面編](../40-software/design/agreement-forming/ipa-guide-2010/screen.md) | paper-repro | 6つの工程成果物の名称と区分を採る | docs/methodology-map.md | 2026-09-11 |
| [データモデル編](../40-software/design/agreement-forming/ipa-guide-2010/data-model.md) | paper-repro | ER図・エンティティ一覧・エンティティ定義・CRUD図の4成果物を採る | docs/methodology-map.md | 2026-09-11 |
| [外部インタフェース編](../40-software/design/agreement-forming/ipa-guide-2010/external-interface.md) | paper-repro | 工程成果物の名称と区分を採る | docs/methodology-map.md | 2026-09-11 |
| [Mermaid](../40-software/notations/mermaid.md) | paper-repro | 全体で使用。実測した図種別は flowchart・erDiagram・stateDiagram-v2 の3種 | docs/methodology-map.md | 2026-09-11 |

## 間接採用（indirect・1件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [概要編](../40-software/design/agreement-forming/ipa-guide-2010/overview.md) | paper-repro | arc-architecture.md の章立ての土台。Processloop 経由の間接採用であり、直接適用したものではない | docs/methodology-map.md | 2026-09-11 |

## 部分採用（partial・1件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [コーディング留保](../30-team/xddp/coding-restraint.md) | paper-repro | 部分的に採用。 承認ゲート（REQ-C06）が同じ役割を担う | docs/methodology-map.md | 2026-09-11 |

## テーラリングあり（tailored・3件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [スペックアウトとトレーサビリティ・マトリクス](../30-team/xddp/spec-out-and-tm.md) | paper-repro | 本来の用途（変更箇所の特定）から、工程の進捗管理へ用途を広げている | docs/methodology-map.md | 2026-09-11 |
| [合意成熟度の3レベル](../40-software/design/agreement-forming/maturity-levels.md) | paper-repro | 仕掛・充実・完成を、トレーサビリティ・マトリクスの工程へ読み替えた | docs/methodology-map.md | 2026-09-11 |
| [4つの作業の区分](../40-software/design/agreement-forming/four-activities.md) | paper-repro | 発注者と開発者が同一人物である個人開発での扱いを定めた | docs/methodology-map.md | 2026-09-11 |

## 参照のみ（referenced・6件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [システムモデリング言語](../20-system/sysml.md) | paper-repro | references-usdm-ipa.md に、Mermaid の要求図が SysML 1.6 準拠である旨の言及があるのみ | docs/methodology-map.md | 2026-09-11 |
| [統一モデリング言語](../40-software/notations/uml.md) | paper-repro | PlantUML 連携の検討材料としての言及1件のみ | docs/methodology-map.md | 2026-09-11 |
| [画面編](../40-software/design/agreement-forming/client-view-2007/screen.md) | paper-repro | 発注者ビューガイドライン（2007）の4編。references-usdm-ipa.md 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している | docs/methodology-map.md | 2026-09-11 |
| [システム振舞い編](../40-software/design/agreement-forming/client-view-2007/system-behavior.md) | paper-repro | 発注者ビューガイドライン（2007）の4編。references-usdm-ipa.md 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している | docs/methodology-map.md | 2026-09-11 |
| [データモデル編](../40-software/design/agreement-forming/client-view-2007/data-model.md) | paper-repro | 発注者ビューガイドライン（2007）の4編。references-usdm-ipa.md 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している | docs/methodology-map.md | 2026-09-11 |
| [概説編・用語集](../40-software/design/agreement-forming/client-view-2007/overview-glossary.md) | paper-repro | 発注者ビューガイドライン（2007）の4編。references-usdm-ipa.md 第3節が「参照すべきは後継の機能要件の合意形成ガイド」と明記している | docs/methodology-map.md | 2026-09-11 |

## 未採用（not-adopted・3件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [プロセスフローダイアグラム](../30-team/process-modeling/pfd.md) | paper-repro | 未採用と明記されている | docs/methodology-map.md | 2026-09-11 |
| [変更設計書](../30-team/xddp/change-design-doc.md) | paper-repro | 未採用 | docs/methodology-map.md | 2026-09-11 |
| [変更プロセスと機能追加プロセスの分離](../30-team/xddp/process-separation.md) | paper-repro | 未採用 | docs/methodology-map.md | 2026-09-11 |

## 対象外（out-of-scope・10件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [ラショナル統一プロセス](../30-team/rup.md) | paper-repro | 反復型のチーム開発プロセスであり、役割分担を前提とする | docs/methodology-map.md | 2026-09-11 |
| [ローンチ](../30-team/tsp/launch.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [リローンチ](../30-team/tsp/relaunch.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [チームの役割](../30-team/tsp/team-roles.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [品質計画](../30-team/tsp/quality-plan.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [週次の追跡](../30-team/tsp/weekly-tracking.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [ポストモーテム](../30-team/tsp/postmortem.md) | paper-repro | チーム開発が前提であり、個人開発では成り立たない | docs/methodology-map.md | 2026-09-11 |
| [変更要求仕様書](../30-team/xddp/change-request-spec.md) | paper-repro | 新規開発で変更対象の母体が無い | docs/methodology-map.md | 2026-09-11 |
| [バッチ編](../40-software/design/agreement-forming/ipa-guide-2010/batch.md) | paper-repro | arc-artifact-order.md が対象外と明記している | docs/methodology-map.md | 2026-09-11 |
| [帳票編](../40-software/design/agreement-forming/ipa-guide-2010/report.md) | paper-repro | arc-artifact-order.md が対象外と明記している | docs/methodology-map.md | 2026-09-11 |

## 痕跡なし（untraced・11件）

| 手法 | プロダクト | 範囲・理由 | 出所 | 確認 |
| --- | --- | --- | --- | --- |
| [ソフトウェアプロダクトライン](../20-system/software-product-lines.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [ドメイン駆動設計](../40-software/design/domain-driven-design.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [オブジェクト指向設計](../40-software/design/object-oriented-design.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [構造化分析・構造化設計](../40-software/design/structured-analysis-design.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [ジャクソンシステム開発](../40-software/design/jackson-system-development.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [Z 記法](../40-software/formal-methods/z-notation.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [ウィーン開発手法](../40-software/formal-methods/vdm.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [Alloy](../40-software/formal-methods/alloy.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [TLA+](../40-software/formal-methods/tla-plus.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [仕様駆動開発](../40-software/ai-assisted/spec-driven-development.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |
| [AI 駆動開発](../40-software/ai-assisted/ai-driven-development.md) | paper-repro | — | docs/methodology-map.md | 2026-09-11 |

## 記録の無い手法（15件）

**どのプロダクトでも使われていないという意味ではない。調べていないという意味である。**

| 手法 | 階層 |
| --- | --- |
| [能力成熟度モデル統合](../10-organization/cmmi.md) | 10-organization |
| [ピープル CMM](../10-organization/people-cmm.md) | 10-organization |
| [品質マネジメントシステム — 要求事項](../10-organization/iso-9001.md) | 10-organization |
| [ソフトウェアへの ISO 9001 適用指針](../10-organization/iso-iec-90003.md) | 10-organization |
| [システムズエンジニアリング知識体系ガイド](../20-system/sebok.md) | 20-system |
| [ソフトウェア及びシステムプロセス工学メタモデル](../30-team/process-modeling/spem.md) | 30-team |
| [ソフトウェアエンジニアリング知識体系ガイド](../40-software/swebok.md) | 40-software |
| [PSP の段階](../50-individual/psp/process-levels.md) | 50-individual |
| [計測の記録](../50-individual/psp/measurement-logs.md) | 50-individual |
| [欠陥タイプ標準](../50-individual/psp/defect-type-standard.md) | 50-individual |
| [PROBE による見積り](../50-individual/psp/probe-estimation.md) | 50-individual |
| [計画と追跡](../50-individual/psp/planning-and-tracking.md) | 50-individual |
| [個人レビュー](../50-individual/psp/design-and-code-reviews.md) | 50-individual |
| [ポストモーテム](../50-individual/psp/postmortem.md) | 50-individual |
| [テスト駆動開発](../50-individual/test-driven-development.md) | 50-individual |

