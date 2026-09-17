---
id: REV-0007
title: SPEM 追加版の構成案に対する検証
status: reviewed
date: 2026-09-17
author: Kazuyuki Kuribayashi
related: ADR-0001, REV-0001, REV-0002, REV-0003, REV-0004, REV-0005, REV-0006
---

# REV-0007 SPEM 追加版の構成案に対する検証

## 1. 検証の対象

SPEM（Software & Systems Process Engineering Metamodel、OMG）を追加した
リポジトリ構成として生成された案を検証した。案の骨子は次のとおり。

- `03-team-processes/process-engineering-and-modeling/` を作り、`spem/` と `pfd/` を置く
- 「RUP は SPEM のメタモデルの概念を用いて構築された」「RUP は SPEM のインスタンスである」と述べる
- SPEM を、形式仕様記述が振る舞いを定義するのと同様に「開発という行為を厳密に定義する枠組み」と位置づける

## 2. 判定の要約

| # | 指摘 | 重大度 |
| --- | --- | --- |
| 1 | **RUP と SPEM の前後関係が逆になっている** | 重大 |
| 2 | 形式手法との対比が3回目の再発である | 重大 |
| 3 | SPEM を記法として扱っているが、実体はメタモデルである | 中 |
| 4 | SPEM 2.0 の中核である Method Content と Process の分離が抜けている | 中 |
| 5 | SPEM が扱わない範囲（enactment）と採用状況に触れていない | 中 |
| 6 | ディレクトリ名の `process-engineering` が別概念を指す | 中 |
| 7 | REV-0005 と REV-0006 の指摘が3回連続で未反映 | 重大 |
| 8 | 権利情報が5回連続で抜けている | 中 |

**ディレクトリを昇格させるという判断は、今回は正しい。** REV-0006 の決定4で定めた
昇格条件を、SPEM の追加によって満たしたためである。第5章で認める。

## 3. 重大な指摘

### 3.1 RUP と SPEM の前後関係が逆になっている

構成案は次のように書いている。

> 実は、Rational Unified Process (RUP) は、SPEM のメタモデルの概念を用いて
> 構築された最も代表的なプロセスフレームワークです
>
> 「RUP（汎用プロセス）は、SPEM（メタモデル）のインスタンス（実体）である」

**年代が合わない。**

| 年 | 出来事 |
| --- | --- |
| 1998年ごろ | Rational が RUP を製品として確立 |
| 1997年11月 | UML が OMG の標準として採択 |
| **2001年11月** | **SPEM 1.0 が OMG の標準として採択** |
| 2008年 | SPEM 2.0 公開（OMG formal/2008-04-01） |

**RUP のほうが SPEM より先に存在する。** SPEM を用いて RUP を構築することは
時系列上できない。

さらに、SPEM 1.0 の仕様書自身が目的をこう述べている。「ソフトウェア開発
プロセスの定義を支援すること。**とくに Rational Unified Process のように
UML の使用を伴う、あるいは必須とするプロセスを含む**」。

つまり **SPEM は、RUP を含む既存のプロセスを記述できるように作られた。**
影響の向きは構成案の記述と逆である。

正しい書き方は次のとおり。

| 誤 | 正 |
| --- | --- |
| RUP は SPEM を用いて構築された | **RUP は SPEM で記述できる** |
| RUP は SPEM のインスタンスである | **SPEM は RUP を記述対象の代表例として想定して作られた** |

Eclipse Process Framework についても同様である。EPF Composer が実装した
UMA（Unified Method Architecture）は SPEM 2.0 へ寄与した側であり、
SPEM から派生したものではない。

**リポジトリに「歴史と構造が立体的になる」と書く以上、前後関係を誤ってはならない。**

### 3.2 形式手法との対比が3回目の再発である

構成案は次のように書いている。

> 形式仕様記述（Z 言語や Alloy など）が対象の振る舞いを厳密に定義するように、
> SPEM は「開発という行為そのもの」を厳密に定義する枠組みとして機能します

同じ形の主張が3回繰り返されている。

| 検証 | 対象 | 内容 |
| --- | --- | --- |
| REV-0001 第4.1章 | USDM | `rigorous-dev-methods` の概要が USDM を形式手法の系統として説明していた |
| REV-0006 第3.3章 | PFD | Z 言語や Alloy になぞらえていた |
| **REV-0007 本項** | **SPEM** | **同上** |

SPEM は MOF にもとづくメタモデルで、UML を記法として用いる。**構造を定義する
ものであって、数学的な意味論による検証を提供するものではない。**
Z 言語や Alloy と並べると、読み手は機械的な検査ができると期待してしまう。

**記述の厳密さと、検証の可能性は別のことである。** この区別が3回崩れている以上、
`40-software/formal-methods/README.md` に、USDM・PFD・SPEM の3つについて
「形式手法ではない理由」を書く。

### 3.3 REV-0005 と REV-0006 の指摘が3回連続で未反映

構成案の `xddp/` は、REV-0005 で検証したものと同じである。

- 3点セットのうち変更設計書とスペックアウトが欠けている
- コーディング留保、プロセスの分離が項目として無い
- `docs/` が無い
- 連番が 01〜05 のまま、`iso9000/`、`object-oriented/` の表記
- 要件工学が設計・実装層の下にある
- `spec-driven/` が個人層にある
- JSD が構造化手法の代表として扱われている

とくに **UML は、本文中で「SysML/UML（`02` レイヤーなど）」と参照されているのに、
ツリーのどこにも存在しない。** REV-0003 から4回続けて指摘している。

## 4. 内容上の誤りと不足

### 4.1 SPEM はメタモデルであり、記法ではない

REV-0006 で PFD を `kind: notation`、`notation_of: process` と定めた。
SPEM を同じ扱いにすると不正確になる。

| | PFD | SPEM |
| --- | --- | --- |
| 実体 | プロセスを描く図法 | プロセスを記述するための**メタモデル** |
| 基盤 | なし | MOF。UML を記法として用いる |
| 定めるもの | 図の描き方 | Role、Task、Work Product などの**概念そのもの** |

**メタレベルが1段違う。** `kind: metamodel` を新設する。第6章参照。

### 4.2 Method Content と Process の分離が抜けている

構成案は SPEM の要素を「Role、Task、Work Product」と説明している。
これは正しいが、**SPEM 2.0 の中核はその先にある。**

SPEM 2.0 は要素を2つに分ける。

| 区分 | 内容 |
| --- | --- |
| **Method Content** | 役割、その役割が行う作業、入出力となる成果物。**再利用される資産** |
| **Process** | Method Content の要素を組み合わせ、時間軸に沿って並べたもの |

**同じ Method Content から複数の Process を組み立てられる**点が SPEM の設計思想であり、
これを書かないと SPEM が単なる用語集に見えてしまう。

### 4.3 SPEM が扱わない範囲に触れていない

SPEM は**プロセスの記述**を対象とし、**enactment（プロジェクト上での計画と実行）
そのものは扱わない。** SPEM 2.0 は外部のプロジェクト計画システムやワークフロー
エンジンと組み合わせる形を示している。

また、SPEM は UML 2.0 の Activity や BPMN と補完的な位置にあるため、
**ツールベンダーごとの採用が分散しており、産業界での位置づけが明確でない**という
評価がある。

構成案は SPEM を「リポジトリの心臓部」と位置づけているが、**採用状況に照らすと
過大である。** 限界と採用状況を `README.md` に書く。

### 4.4 ディレクトリ名 `process-engineering-and-modeling` の問題

「Process Engineering」は、プロセスを**設計し計測し改善する活動**を指す語である。
REV-0002 で検証したとおり、その領域を担うのは CMMI や ISO/IEC 33000 シリーズであり、
本リポジトリでは `10-organization/` に属する。

SPEM と PFD は、プロセスを**記述する**ための道具である。したがって
**`process-modeling/` とする。** 語を広く取ると、後で CMMI との境界が曖昧になる。

### 4.5 USDM の位置づけの表現

> USDM の仕様書は、SPEM で定義される「Work Product（成果物）」の一つであり

意図は妥当だが、精度を上げる。SPEM が定義するのは **Work Product という概念**で
あって、個々の成果物の一覧ではない。正しくは「USDM で書かれた仕様書は、
プロセス定義において Work Product として扱われる」である。

### 4.6 権利情報が5回連続で抜けている

OMG の仕様書は無償で入手できるが著作物であり、実装や再配布には OMG の定める条件がある。

| 検証 | 対象 |
| --- | --- |
| REV-0002 | ISO、CMMI、PSP/TSP |
| REV-0003 | PSP |
| REV-0005 | PSP |
| REV-0006 | PSP |
| **REV-0007** | **SPEM（OMG）** |

**5回連続である。** ADR-0002 で `rights` を必須にするまで、この漏れは止まらない。

## 5. 昇格条件を満たしたことの確認

REV-0006 の決定4で、次を定めた。

> 2件目のプロセス記法が登録された時点で `30-team/process-notations/` を作り、
> PFD を移す

**SPEM の追加により、この条件を満たした。** したがってディレクトリを作る判断は
今回は正しい。ただし名称は第4.4章のとおり `process-modeling/` とする。
「notations」だと SPEM（メタモデル）が収まらないため、REV-0006 で予定した名称も
ここで改める。

## 6. 修正した構成（`30-team/` 部分）

```text
├── 30-team/                              # チーム開発プロセス層 (Mid)
│   ├── README.md                         # この階層の定義と境界
│   ├── process-modeling/                 # プロセスを記述する道具。2件目の登録で昇格
│   │   ├── README.md                     # メタレベルの違い、形式手法ではない理由
│   │   ├── spem.md                       # kind: metamodel。OMG。SPEM 2.0（2008）
│   │   └── pfd.md                        # kind: notation。AFFORDD / 清水吉男
│   ├── rup.md                            # 参照のみ。IBM proprietary。レガシー
│   ├── tsp.md                            # 参照のみ。CMU のサービスマーク
│   └── xddp/                             # 3点セットを持つため例外的にディレクトリ
│       ├── README.md                     # 全体像、母体の前提、テーラリングの事例
│       ├── change-request-spec.md        # 変更要求仕様書（USDM 形式）— 3点セット①
│       ├── spec-out-and-tm.md            # スペックアウトと TM — 3点セット②
│       ├── change-design-doc.md          # 変更設計書 — 3点セット③
│       ├── coding-restraint.md           # コーディング留保
│       └── process-separation.md         # 変更プロセスと機能追加プロセスの分離
```

`pfd.md` は `xddp/` から `process-modeling/` へ移す。XDDP との関係は
`relates_to` で保つ。

## 7. Front Matter の拡張

### 7.1 `kind: metamodel`

```yaml
kind: metamodel
metamodel_of: process       # process | software | system
```

`kind` の値に `metamodel` を加える。既存の値との関係は次のとおり。

| kind | 定めるもの | 例 |
| --- | --- | --- |
| `process` | 開発の進め方そのもの | RUP、XDDP、TSP |
| `notation` | 記述の書き方 | UML、PFD、USDM |
| `metamodel` | **記述に使う概念そのもの** | **SPEM** |

### 7.2 `relates_to` に関係を2つ追加

RUP と SPEM の関係を正しく表すために、次の2値を加える。

| 値 | 意味 |
| --- | --- |
| `describes` | 対象を記述できる |
| `describable-by` | 対象によって記述されうる |

**`instance-of` は使わない。** 第3.1章のとおり、RUP は SPEM から生まれたのではない。

### 7.3 SPEM の登録例

```yaml
id: MTH-00NN
name: SPEM
name_ja: ソフトウェア及びシステムプロセス工学メタモデル
layer: 30-team
kind: metamodel
metamodel_of: process
axes:
  origin: both
status: referenced-only
applicable_to_solo: true
relates_to:
  - id: MTH-00NN            # RUP
    relation: describes
    note: SPEM 1.0 は RUP を記述対象の代表例として想定した。RUP のほうが先に存在する
  - id: MTH-00NN            # PFD
    relation: alternative-to
    note: どちらもプロセスを記述するが、SPEM はメタモデル、PFD は図法
rights:
  holder: Object Management Group (OMG)
  terms: 仕様書は無償で入手できるが著作物。本文の転記と翻案をしない
  verified: 2026-09-17
sources:
  - https://www.omg.org/spec/SPEM/2.0/
notes:
  - enactment（計画と実行）そのものは扱わない
  - ツールベンダーごとの採用が分散している
```

## 8. 本リポジトリへ反映する決定

| # | 決定 |
| --- | --- |
| 1 | **`30-team/process-modeling/` を作り、`spem.md` と `pfd.md` を置く。** 昇格条件を満たした |
| 2 | **名称は `process-modeling`。** `process-engineering` は CMMI 等の領域を指すため使わない |
| 3 | **`kind` に `metamodel` を追加する** |
| 4 | **`relates_to` に `describes` と `describable-by` を追加する。`instance-of` は設けない** |
| 5 | **RUP と SPEM の前後関係を `notes` に明記する。** 1998年ごろ RUP、2001年11月 SPEM 1.0 |
| 6 | **`process-modeling/README.md` に、SPEM が enactment を扱わないことと採用状況を書く** |
| 7 | **`formal-methods/README.md` に、USDM・PFD・SPEM が形式手法でない理由を書く** |
| 8 | **SPEM の `rights` に OMG を記す** |

## 9. 繰り返されている指摘

REV-0006 第10章の表を更新する。

| 観点 | 回数 | 対策 |
| --- | --- | --- |
| 権利制約の欠落 | **5回** | `rights` を必須項目として先に実装する |
| 検証結果を土台にしていない構成案 | **3回** | 構成案を出す前に最新の REV を参照する |
| 形式手法との誤った対比 | **3回** | `formal-methods/README.md` に理由を書く |
| UML の置き場が無い | **4回** | `40-software/notations/uml.md` を早期に作る |
| JSD を構造化手法の代表とする | 3回 | `40-software/design/README.md` に系統の違いを書く |
| IPA ガイドの対象工程の誤り | 2回 | `40-software/requirements/README.md` に対象工程を明記する |
| 評価的な形容 | **5回** | 記録文書に評価を書かない |

**7項目のうち4項目が、文書を1本書けば止まる。** ADR-0002 と `docs/conventions/` の
着手を、これ以上先送りしない。

## 10. ADR-0001 の未決事項への影響

| # | 未決事項 | 本検証による変化 |
| --- | --- | --- |
| 1 | 上流工程を含むかどうか | 変化なし。着手の前提条件 |
| 2 | 複数工程にまたがる手法の置き場 | 解消済み |
| 3 | `references-usdm-ipa.md` の移設可否 | 変化なし |
| 4 | 文書の粒度と命名規則 | **昇格条件が実際に機能することを確認した。** ADR-0002 で追認すること |
| 5 | ソフトウェア工学以外を含むか | 変化なし。着手の前提条件 |
