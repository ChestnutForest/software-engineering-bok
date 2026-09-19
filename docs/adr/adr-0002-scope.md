---
id: ADR-0002
title: スコープ
status: draft
date: 2026-09-19
---

# ADR-0002 スコープ

> **草案である。** 選択肢と、それぞれを選んだ場合に残る範囲を並べた。
> 決めたら `status` を `accepted` に変え、採らなかった選択肢を「検討した案」に移す。

## 決めること

| # | 問い |
| --- | --- |
| 1 | 上流工程（要件定義・設計）を含むか |
| 2 | ソフトウェア工学以外（システムズエンジニアリング、組織品質マネジメント）を含むか |

**この2つが決まるまで、収録を進めない。** 7回先送りした。

## 問い1 — 上流工程

### 含む場合

`40-software/` がそのまま残る。USDM、IPA の各ガイド、DDD、構造化手法、JSD、
UML、形式手法4件が登録できる。

リポジトリ名 `software-engineering-bok` と整合する。

### 含まない場合

次がまとめて対象外になる。

```
40-software/requirements/          USDM
40-software/design/                IPA ガイド13件、DDD、構造化手法、JSD
40-software/formal-methods/        Z、VDM、Alloy、TLA+
40-software/notations/uml.md       設計の記法であるため
30-team/xddp/change-request-spec.md  変更要求仕様書は要求の記述
```

**残るのは実装以降だけになる。** TDD、仕様駆動、AI 駆動、コーディング留保、
PSP、プロセス系。約25ファイルまで減る。

このとき、リポジトリ名も見直しの対象になる。

## 問い2 — ソフトウェア工学以外

### 含む場合

`10-organization/` と `20-system/` が残る。CMMI、People CMM、ISO 9001、
ISO/IEC 90003、SEBoK、SysML、SPLE が登録できる。

ただし **SEBoK は別分野の知識体系である。** SWEBOK Guide は自らの目的に
「他分野との境界を明確にすること」を掲げており、`software-engineering-bok` という
名前に SEBoK を入れるのは、その境界をまたぐことになる。

### 含まない場合

次が対象外になる。

```
10-organization/     CMMI、People CMM、ISO 9001、ISO/IEC 90003
20-system/sebok.md
20-system/sysml.md   システムズエンジニアリング向け
```

`20-system/software-product-lines.md` は残る。ソフトウェアの再利用戦略であるため。

## 組み合わせ

| 問い1 | 問い2 | 残るファイル数の目安 |
| --- | --- | --- |
| 含む | 含む | 約75（現在の構成） |
| 含む | 含まない | 約65 |
| 含まない | 含む | 約35 |
| 含まない | 含まない | 約25 |

## 判断の材料

- **姉妹リポジトリとの重複** — `paper-repro` の `references-usdm-ipa.md` が
  USDM・XDDP・IPA ガイドを既に扱っている。移設するか相互参照にとどめるかは未決事項3
- **個人プロジェクトでの適用可能性** — `10-organization/` は全件 `applicable_to_solo: false`。
  選択肢ではなく参照として登録することになる
- **名前との整合** — 含む範囲が広いほど `software-engineering-bok` という名前から外れる

## 決定

（未記入）

## 影響

（未記入）
