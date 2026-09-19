# 登録フォーマット

## 2種類のファイル

| 種類 | 置き場 | 役割 |
| --- | --- | --- |
| 手法エントリ | 各階層の `*.md` | 1つの手法を登録する |
| グループ README | ディレクトリの `README.md` | 境界を述べ、`rights` の継承元になる |

## 手法エントリ

```yaml
---
id: MTH-0421
name: USDM
name_ja: 要求仕様記述法
kind: notation
describes: requirements        # notation / metamodel のときだけ
target_phase: [requirements]
origin: both
formality: semi-formal
verification:                  # formality: formal のときだけ
  method: model-checking
  scope: bounded
  tools: [Alloy Analyzer]
status: registered
applicable_to_solo: true
relates_to:
  - id: MTH-0342
    relation: contained-by
    note: XDDP の変更要求仕様書は USDM 形式で書く
rights:
  holder: 清水吉男 / AFFORDD
  redistribution: unknown
  derivation: unknown
  conditions: 記法という方法論は採用してよい
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - url: https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-basic_1.3.pdf
    title: USDM 小冊子 基礎編 ver 1.3（2016）
    verify: manual
    verified: 2026-08-26
---
```

### `kind`

**1つの手法は1つの `kind` を持つ。** 複数の軸に値を持つのではない。

| 値 | 定めるもの | 例 |
| --- | --- | --- |
| `paradigm` | 考え方 | オブジェクト指向、構造化 |
| `design-approach` | 設計の進め方 | DDD、JSD |
| `process` | 開発の進め方そのもの | RUP、TSP、XDDP、PSP |
| `practice` | 実装の進め方 | TDD、仕様駆動開発 |
| `notation` | 記述の書き方 | UML、SysML、USDM、PFD、Z、Alloy |
| `metamodel` | 記述に使う概念そのもの | SPEM |
| `reuse-strategy` | 再利用の戦略 | SPLE |
| `standard` | 要求事項。適合が判定される | ISO 9001 |
| `guideline` | 指針。守るべき事項を課さない | 機能要件の合意形成ガイド |
| `appraisal-framework` | 評定の枠組み | CMMI、People CMM |
| `body-of-knowledge` | 知識体系 | SWEBOK、SEBoK |

**公的機関が出したものをすべて `standard` と呼ばない。**

### `describes`

`notation` と `metamodel` のときだけ持つ。`software` / `system` / `requirements` / `process`。

### `formality`

| 値 | 意味 | 例 |
| --- | --- | --- |
| `informal` | 自然言語 | ガイドライン、プロセス |
| `semi-formal` | 構造は定まるが意味論は数学的でない | USDM、UML、SysML、PFD、SPEM |
| `formal` | 意味論が数学的に定義され、機械的な検査の対象になりうる | Z、VDM、Alloy、TLA+ |

**この欄は、`semi-formal` を形式手法と取り違える誤りを防ぐために設けた。**
実際に USDM・PFD・SPEM の3件で同じ取り違えが起きている。

### `status`

| 値 | 意味 | 本文に書けるもの |
| --- | --- | --- |
| `registered` | 選択肢として扱う | 判断軸、一次資料へのリンク |
| `referenced-only` | 参照のみ | リンクと、著作物にあたらない事実だけ |
| `out-of-scope` | 対象外 | 対象外と判断した理由 |

**`referenced-only` が既定である。** `registered` に上げるのは、
`rights.verified` に日付が入ってからとする。

### `applicable_to_solo`

`true` / `partial` / `false`。`partial` の場合、**何を読み替える必要があるかを
`notes` に書く。**

### `relates_to`

| 値 | 意味 |
| --- | --- |
| `contains` | 構成要素として含む |
| `contained-by` | 構成要素として含まれる |
| `requires` | 前提として必要とする |
| `alternative-to` | 同じ問題に対する別の解 |
| `succeeds` | 後継である |
| `superseded-by` | 後継に引き継がれた。自身は現行でない |
| `describes` | 対象を記述できる |
| `describable-by` | 対象によって記述されうる |

**`instance-of` は設けない。** RUP は SPEM から生まれたのではないため、
その種の関係を書けてしまう値を用意しない。

### `rights`

**権利上できることと、運用としてやらないことを分けて書く。**

| 欄 | 内容 |
| --- | --- |
| `holder` | 権利者 |
| `redistribution` | `permitted` / `restricted` / `prohibited` / `unknown` |
| `derivation` | 同上 |
| `attribution` | 必要な出典表記 |
| `conditions` | 条件 |
| `policy` | **本リポジトリの運用方針。** 権利の制約とは別 |
| `verified` | 確認日、または `未確認` |

`redistribution` と `derivation` を分けるのは、組み合わせが対象ごとに違うためである。
IPA の機能要件の合意形成ガイドは**複製可・翻案不可**であり、ISO 9001 は**両方不可**である。

### `rights` の継承

同じ条件を共有する群は、グループ README から継承できる。

```yaml
rights:
  inherit: ./README.md
```

| # | 規則 |
| --- | --- |
| 1 | **`rights` 欄の省略は認めない。** 継承する場合も `inherit` を明示する |
| 2 | 継承元は**同じディレクトリか祖先の `README.md`** に限る |
| 3 | **多段継承を禁じる。** 継承元は完全な `rights` ブロックを持つ |
| 4 | **`sources` は継承しない。** 各エントリが自分の一次資料と確認日を持つ |
| 5 | `views/by-rights.md` は**展開後の値**を出し、継承元も列に出す |

規則4が要点である。IPA の分冊は権利条件こそ同じだが、**PDF の URL が分冊ごとに違う。**
確認の手間は `sources` 側にあり、そこは各エントリが負う。

### `sources`

```yaml
sources:
  - url: https://www.ipa.go.jp/archive/files/000004521.pdf
    title: 機能要件の合意形成ガイド 画面編
    verify: manual        # auto | manual
    verified: 2026-08-10
```

**IPA、AFFORDD、WARP、Mermaid の各サイトは自動取得を制限している。**
`verify: manual` のものは生成スクリプトの検査対象から外し、一覧に「手動確認」と表示する。
**自動で通ったように見せてはいけない。**

## グループ README

`group: true` を持ち、`kind` と `status` を持たない。完全な `rights` ブロックを持つ。

## 持たない欄

| 欄 | 理由 |
| --- | --- |
| `layer` | **ディレクトリが決める。** 2か所に書くと同期が崩れる |
| `axes`（6つの分類軸） | **手法の属性ではない。** `kind` が表す。軸は `selection-axes.md` にある |
