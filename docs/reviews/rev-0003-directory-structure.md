---
id: REV-0003
title: ディレクトリ構成案に対する検証
status: reviewed
date: 2026-09-17
author: Kazuyuki Kuribayashi
related: ADR-0001, REV-0001, REV-0002
---

# REV-0003 ディレクトリ構成案に対する検証

## 1. 検証の対象

`software-engineering-bok` のディレクトリ構成として生成された案を検証した。
案の骨子は次のとおりである。

- ルート直下に `01-org-quality-management/` から `05-personal-discipline/` までの
  連番ディレクトリを置き、5階層をそのまま木構造にする
- 各手法をそのいずれか1つの下にディレクトリとして配置する
- `guides/methodology-selection-guide.md` を1ファイル置く
- `formal-methods/` と `structured-methods/` を追加で用意する

## 2. 判定の要約

| # | 指摘 | 重大度 |
| --- | --- | --- |
| 1 | 決定済みの7軸を、1本の階層に潰している | 重大 |
| 2 | 既存の `docs/` を無視しており、実際のリポジトリと衝突する | 重大 |
| 3 | 権利情報の置き場がない | 重大 |
| 4 | 未確定のスコープを先取りしている | 重大 |
| 5 | 分類の誤りが7件ある。UML の置き場が無い | 中 |
| 6 | 依頼にない追加と、出典を確認できない記述がある | 中 |
| 7 | 連番と表記に見直しの余地がある | 小 |

## 3. 重大な指摘

### 3.1 決定済みの7軸を、1本の階層に潰している

REV-0001 第7章で6軸を、REV-0002 第6章で第7軸「適用範囲」を決めた。
**5階層は7軸のうちの1つ（適用範囲）にすぎない。**

構成案はこの1軸を最上位の木構造に据え、各手法をそのいずれか1つの下に置いている。
ディレクトリは1つの場所にしか置けないため、**手法は必ず1つの軸の1つの値に
押し込まれる**ことになる。

これは REV-0001 第3.4章で退けた「単一選択」の誤りが、そのまま
ファイルシステムの形で再現したものである。DDD と UML と TDD は同時に使えるが、
この木構造では別々の階層に分散し、関係が表現できない。

**軸が7本あるものを、木構造1本で表そうとしてはいけない。** 第7章に代替案を示す。

### 3.2 既存の `docs/` を無視している

本リポジトリには既に次のファイルが存在する。

```
docs/adr/adr-0001-repository-naming.md
docs/reviews/rev-0001-methodology-selection-guide.md
docs/reviews/rev-0002-process-standards-and-boks.md
```

構成案には `docs/` が一切現れず、`guides/` と `01-…` をルート直下に置いている。
**このまま採用すると、決定記録と検証記録の置き場が失われる。**

### 3.3 権利情報の置き場がない

REV-0002 第6章の決定3で「登録フォーマットに `rights` 欄を必須で設ける」と決めた。
構成案にはフォーマットの定義がなく、各ディレクトリの中身も示されていない。

`cmmi/` や `psp/` という空のディレクトリを用意することは、**そこに解説を書く**
という運用を暗に招く。ISO 規格の本文は再配布できず、CMMI のモデル本文は有償
ライセンスで、PSP と TSP は CMU のサービスマークかつ特別許諾下にある。

**書いてはいけないものの置き場を先に作ってしまう構成である。**

### 3.4 未確定のスコープを先取りしている

ADR-0001 第6章の未決事項1（上流工程を含むか）と、REV-0002 第7章で追加した
未決事項5（ソフトウェア工学以外を含むか）は、いずれも未確定である。

構成案は両方を「含む」と決めた前提で木を組んでいる。
`01-org-quality-management/` と `02-system-architecture/sebok/` がそれにあたる。

**ADR-0002 を書く前にディレクトリを作ると、決定がディレクトリによって既成事実化する。**
REV-0001、REV-0002 に続き3度目の指摘である。

## 4. 分類の誤り

| 構成案の配置 | 問題 | 正しい扱い |
| --- | --- | --- |
| `02-.../sebok/` | 別分野の知識体系を階層に置いている。REV-0002 の決定2（本文を置かず参照にとどめる）に反する | `kind: body-of-knowledge`、`status: referenced-only` |
| `02-.../sysml/` | 記法を階層に置いている | `kind: notation` |
| **（UML が無い）** | **一覧にあった UML の置き場がどこにもない** | `kind: notation` として登録 |
| `04-.../requirements-engineering/` | 要件工学を設計・実装層に入れている。SWEBOK v4 では Software Requirements と Software Design は別の知識領域である | 工程で置かず、`kind` と `axes` で表す |
| `05-.../tdd/` | TDD は個人の規律に限らない。チームのコードベースに対する進め方でもある | `scope: individual, team` |
| `05-.../spec-driven/` | REV-0001 第4.3章と REV-0002 第5章で2度指摘済み。エージェントへ仕様を渡す進め方であり、個人の規律ではない | `kind: practice`、`scope: team` |
| `04-.../structured-methods/`（JSD） | JSD（Jackson System Development）は、DeMarco や Yourdon の構造化分析・設計とは系統が異なる別の手法である。代表例として挙げるのは適切でない | 構造化分析・設計と JSD を別々に登録する |

構成案の解説自身が、要件工学を「層02と層04を繋ぐブリッジ」と述べている。
**繋ぐものであると認めながら層04に入れている点が、木構造の限界を示している。**

## 5. 依頼にない追加と、出典を確認できない記述

| 記述 | 判定 |
| --- | --- |
| `formal-methods/`（Z、VDM、TLA+、Alloy） | 依頼の一覧にない追加。登録してよいが、**別件として扱う。** REV-0001 第4.1章で、USDM を形式手法と取り違える誤りを指摘済みであり、隣に置く際は区別を明記する |
| 「AI駆動開発（AI Relay Development等）」 | **出典を確認できない。** 確立した手法名として検索で裏づけが取れなかった。代表例として書かない |
| 「Macro層で CMMI レベル4以上を前提とし」 | **二重に誤り。** 「レベル4」は CMMI V1.3 の段階表現の語で、V3.0 はドメインとプラクティスエリアで構成される。加えて CMMI は組織の評定制度であり、個人プロジェクトでは選べない（REV-0002 第3.5章） |
| 「PSP の計測プロセスを Alloy や Z 言語でモデル化・検証する」 | **許諾の確認が先。** PSP のスクリプトとフォームは CMU の特別許諾下にあり、派生や改変には SEI の書面許可が必要である。モデル化は派生にあたりうる。REV-0002 の決定6に反する |
| 「世界的に見ても価値の高い」 | 根拠がない。判断を曇らせるため書かない |

## 6. 命名の細部

| 構成案 | 指摘 |
| --- | --- |
| `iso9000/` | ISO 9000 は用語と基本を定める規格である。要求事項は **ISO 9001**、ソフトウェアへの適用指針は **ISO/IEC 90003**。1つのディレクトリにまとめず個別に登録する |
| `software-product-line/` | SEI の表記は **Software Product Lines**（複数形） |
| `object-oriented/` | 形容詞だけで名詞がない。`object-oriented-design` のように対象を伴わせる |
| `01-` 〜 `05-` の連番 | 段階ではないものに順序を与えている。並べ替えるたびに全パスが変わり、リンクが切れる |
| ハイフン区切りの小文字 | **一貫しており、この点はよい** |

## 7. 代替案

木構造を1本に絞らず、**登録を平坦にして、一覧を生成する**構成を提案する。
これは姉妹プロジェクトでトレーサビリティ・マトリクスを Front Matter から生成し、
手で編集しない運用と同じ考え方である。

```text
software-engineering-bok/
├── README.md
├── docs/
│   ├── adr/                          # 決定記録（既存）
│   ├── reviews/                      # 検証記録（既存）
│   └── conventions/
│       ├── axes.md                   # 7軸の定義
│       └── method-entry-format.md    # 登録フォーマットの仕様
├── methods/                          # 1手法1ファイル。階層を作らない
│   ├── mth-0001-usdm.md
│   ├── mth-0002-xddp.md
│   ├── mth-0003-ipa-agreement-guide.md
│   ├── mth-0004-cmmi.md
│   ├── mth-0005-psp.md
│   ├── mth-0006-uml.md
│   └── ...
├── references/                       # 一次情報の URL と使用条件
│   └── references-usdm-ipa.md
├── views/                            # Front Matter から生成。手で編集しない
│   ├── by-scope.md
│   ├── by-kind.md
│   └── by-axis.md
├── guides/
│   └── selection/
│       ├── README.md                 # 軸ごとに選ぶ手順
│       └── combinations.md           # 依存と、両立しない組み合わせ
└── scripts/
    └── generate-views.mjs
```

### 7.1 登録フォーマット

`methods/` 配下の各ファイルは、次の Front Matter を必ず持つ。

```yaml
id: MTH-0004
name: CMMI
name_ja: 能力成熟度モデル統合
kind: appraisal-framework
axes:
  paradigm: null
  design_approach: null
  process: null
  notation: null
  reuse: null
  practice: null
  scope: organization
status: referenced-only
applicable_to_solo: false
rights:
  holder: ISACA（商標は Carnegie Mellon University）
  terms: モデル本文は有償ライセンス。転記と翻案をしない
  verified: 2026-09-17
sources:
  - https://cmmiinstitute.com/
```

`kind` に使う値を次のとおり定める。

| 値 | 例 |
| --- | --- |
| `paradigm` | オブジェクト指向、構造化 |
| `design-approach` | DDD |
| `process` | RUP、XDDP、TSP |
| `notation` | UML、SysML、USDM |
| `practice` | TDD、Spec 駆動 |
| `reuse-strategy` | SPLE |
| `standard` | ISO 9001、ISO/IEC 90003 |
| `appraisal-framework` | CMMI、People CMM |
| `body-of-knowledge` | SWEBOK、SEBoK |

`status` に使う値を次のとおり定める。

| 値 | 意味 |
| --- | --- |
| `registered` | 選択肢として扱う |
| `referenced-only` | 参照のみ。本文は置かない。SEBoK、CMMI、ISO 規格はここに入る |
| `out-of-scope` | 対象外と判断した。理由を本文に書く |

### 7.2 この構成が解く問題

| 構成案の問題 | 代替案での扱い |
| --- | --- |
| 7軸を1本の木に潰す | 登録は平坦。軸は Front Matter の値。一覧は `views/` に生成する |
| 手法が1か所にしか置けない | 1手法1ファイル。複数の軸に値を持てる |
| 権利情報の置き場がない | `rights` が必須。書けない項目は登録できない |
| 解説を書く運用を招く | `status: referenced-only` を既定に置き、本文ではなく出典を書かせる |
| 連番の並べ替えでパスが変わる | `mth-NNNN` の連番は登録順であり、意味を持たない |
| 選択ガイドが1ファイル | `guides/selection/` に軸ごとの手順と、組み合わせの制約を分けて置く |

## 8. 本リポジトリへ反映する決定

| # | 決定 |
| --- | --- |
| 1 | **5階層をディレクトリ構造にしない。** 適用範囲は第7軸であり、Front Matter の値として持つ |
| 2 | **`docs/` を維持する。** `adr/`、`reviews/`、`conventions/` を置く |
| 3 | **`methods/` は平坦にする。** 1手法1ファイル、`mth-NNNN-<name>.md` |
| 4 | **一覧（`views/`）は生成物とし、手で編集しない** |
| 5 | **`rights` と `status` を必須項目とする。** 書けない項目は登録しない |
| 6 | **ディレクトリの作成は ADR-0002 の後に行う。** 未決事項1と5が決まるまで着手しない |

## 9. 最初の着手について

構成案は「まず `requirements-engineering/` 配下に USDM と IPA の知見を
Markdown 化していく」としている。方向としては妥当だが、順序を修正する。

1. ADR-0002 でスコープ（未決事項1と5）を決める
2. `docs/conventions/` に軸の定義と登録フォーマットを書く
3. `references/` に `references-usdm-ipa.md` を移設するか、相互参照にとどめるかを決める（未決事項3）
4. `methods/mth-0001-usdm.md` を**フォーマットに従って1件だけ**作り、形式を検証する
5. 問題がなければ XDDP、IPA ガイドと続ける

**1件目でフォーマットを検証してから量を増やす。** 先に木を作ってから埋めると、
フォーマットの不備が全件に波及する。

## 10. ADR-0001 の未決事項への影響

| # | 未決事項 | 本検証による変化 |
| --- | --- | --- |
| 1 | 上流工程を含むかどうか | **着手の前提条件になった。** 第9章の順序1 |
| 2 | 複数工程にまたがる手法の置き場 | **解消の見込み。** 平坦な登録と複数軸の値により、置き場を1つに決める必要がなくなる |
| 3 | `references-usdm-ipa.md` の移設可否 | **着手の前提条件になった。** 第9章の順序3 |
| 4 | 文書の粒度と命名規則 | **本検証で具体案を示した。** ADR-0002 で追認すること |
| 5 | ソフトウェア工学以外を含むか | **着手の前提条件になった。** 第9章の順序1 |
