---
id: GRP-0510
name: PSP
name_ja: パーソナルソフトウェアプロセス
kind: process
group: true
rights:
  holder: カーネギーメロン大学
  redistribution: restricted
  derivation: prohibited
  conditions: PSP は CMU のサービスマーク。Process Dashboard 同梱のスクリプトとフォームは個人利用限定の特別許諾。派生や改変には SEI の書面許可が要る
  policy: 本文を転記も言い換えもしない
  verified: 未確認
---

# PSP — パーソナルソフトウェアプロセス

個人が自分の作業時間と欠陥を計測し、見積りと品質を改善していくプロセス。

## 構成

| ファイル | 内容 |
| --- | --- |
| [PSP の段階](process-levels.md) | 段階的に規律を足していく |
| [計測の記録](measurement-logs.md) | 時間、欠陥、サイズ |
| [欠陥タイプ標準](defect-type-standard.md) | 欠陥を分類する尺度 |
| [PROBE による見積り](probe-estimation.md) | 実績から見積もる |
| [計画と追跡](planning-and-tracking.md) | 計画を立て実績と比べる |
| [個人レビュー](design-and-code-reviews.md) | 設計とコードを自分で見る |
| [ポストモーテム](postmortem.md) | 終了時に分析する |

## TSP との関係

**TSP は PSP を前提とする。** 個人の計測ができないとチームの計画が成り立たない。
`relates_to` に `contained-by` として記録する。

TSP には `team-roles.md` があるが、PSP に対応するものは無い。
**個人には役割分担が無いためである。**

## 権利 — 本リポジトリで最も制約が強い

```yaml
rights:
  holder: カーネギーメロン大学
  redistribution: restricted
  derivation: prohibited
  conditions: PSP は CMU のサービスマーク。Process Dashboard 同梱のスクリプトとフォームは個人利用限定の特別許諾。派生や改変には SEI の書面許可が要る
  policy: 本文を転記も言い換えもしない
  verified: 未確認
```

配下のファイルは `rights: inherit: ./README.md` で継承する。

⚠️ **スクリプトとフォームの様式そのものが許諾の対象である。**
項目名の列挙も翻案にあたりうる。段階の名称、欠陥タイプの一覧、フォームの項目を
**そのまま書き写さない。**

⚠️ **2018年に CC BY 4.0 で公開された教材があるとされるが、本リポジトリでは未確認。**
参照する際は、どの版かを必ず `sources` に記録すること。

## 姉妹リポジトリ

PSP / TSP を実装したツールの移植は
[`processloop`](https://github.com/ChestnutForest/processloop) で進めている。
同リポジトリは同じ許諾条件の下にあり、公開前のゲートを設けている。
