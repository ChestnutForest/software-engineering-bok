---
id: GRP-0320
name: TSP
name_ja: チームソフトウェアプロセス
kind: process
group: true
rights:
  holder: カーネギーメロン大学
  redistribution: restricted
  derivation: prohibited
  conditions: TSP は CMU のサービスマーク。教材の版により条件が異なる
  policy: 本文を転記も言い換えもしない
  verified: 未確認
---

# TSP — チームソフトウェアプロセス

PSP を修めた技術者のチームが、自分たちで計画を立てて計測しながら進めるプロセス。

## 構成

| ファイル | 内容 |
| --- | --- |
| [ローンチ](launch.md) | チーム自身が計画を作る |
| [リローンチ](relaunch.md) | サイクルごとに計画を作り直す |
| [チームの役割](team-roles.md) | チームリーダーと役割マネージャ |
| [品質計画](quality-plan.md) | 欠陥の作り込みと除去を数値で計画する |
| [週次の追跡](weekly-tracking.md) | データを報告し進捗を測る |
| [ポストモーテム](postmortem.md) | 実績を分析し次サイクルへ反映する |

## 前提

**PSP を前提とする。** 個人の計測ができないとチームの計画が成り立たない。
`relates_to` に `requires` として記録する。

**チームが無いと成立しない。** ローンチは全員で計画を作る場であり、役割マネージャは
複数人で分担するものである。したがって `applicable_to_solo: false` とする。

**導入には訓練を受けたコーチが要る。** 文書を読むだけでは適用できない。

## 権利

```yaml
rights:
  holder: カーネギーメロン大学
  redistribution: restricted
  derivation: prohibited
  conditions: TSP は CMU のサービスマーク。教材の版により条件が異なる
  policy: 本文を転記も言い換えもしない
  verified: 未確認
```

配下のファイルは `rights: inherit: ./README.md` で継承する。

⚠️ **2018年に CC BY 4.0 で公開された PSP/TSP 教材があるとされるが、本リポジトリでは未確認。**
参照する際は、どの版かを必ず `sources` に記録すること。
