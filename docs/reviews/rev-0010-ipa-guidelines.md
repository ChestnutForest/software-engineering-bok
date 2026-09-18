---
id: REV-0010
title: IPA ガイドラインの組み入れと rights 欄の分解
status: reviewed
date: 2026-09-18
author: Kazuyuki Kuribayashi
related: ADR-0001, REV-0002, REV-0004, REV-0006, REV-0008, REV-0009
---

# REV-0010 IPA ガイドラインの組み入れと rights 欄の分解

## 1. 検証の対象

`paper-repro` の `docs/references-usdm-ipa.md` の第2節と第3節を、本リポジトリへ
組み入れる場合に何を直すべきかを検証した。

| 節 | 対象 |
| --- | --- |
| 2 | 機能要件の合意形成ガイド（IPA、2010年3月） |
| 3 | 発注者ビューガイドライン（2007〜2008年） |

**一次資料を読み直した結果、これまでの検証で積み上げた決定に3つの誤りが見つかった。**
いずれも本リポジトリ側の誤りである。

## 2. 判定の要約

| # | 指摘 | 重大度 |
| --- | --- | --- |
| 1 | **複製・再配布は許されている。`rights` 欄が1軸では足りない** | 重大 |
| 2 | **REV-0004 の配置が誤り。対象工程は外部設計工程であって要件定義ではない** | 重大 |
| 3 | 発注者ビューガイドラインは `registered` にできない | 中 |
| 4 | `kind` に該当する値が無い | 中 |
| 5 | `applicable_to_solo` が2値では表せない | 中 |
| 6 | 一次資料の一部は自動取得できない | 中 |

## 3. 重大な指摘

### 3.1 複製・再配布は許されている

REV-0002 第3.2章で、権利制約の表に次のように書いた。

> ISO 9000 ファミリー | **有料の規格票。本文の複製・再配布はできない。** 言及は規格番号と表題にとどめる

そして本リポジトリの README と ADR-0001 で「本文の転記も言い換えもしない」を
全対象に適用する方針として掲げた。**IPA ガイドについて、この整理は不正確である。**

一次資料の記述は次のとおりである。

| 行為 | 可否 |
| --- | --- |
| 複製・再配布 | **できる。** 著作権表示を明記し、情報システム開発に携わる者が本目的のために行う場合、無償で |
| **改変・翻案** | **できない。明示的に禁じられている** |

つまり、**禁じられているのは改変と翻案であって、複製ではない。**
姉妹プロジェクトが「転記も言い換えもしない」としているのは、翻案の禁止を
確実に守るために、より安全な側へ倒した運用上の判断である。**権利の制約そのものと、
運用上の方針は別のことである。**

**`rights` を1つの `terms` 欄で表していたことが誤りだった。** 対象ごとに
組み合わせが違う。

| 対象 | 複製・再配布 | 改変・翻案 |
| --- | --- | --- |
| 機能要件の合意形成ガイド | **可**（著作権表示必須） | 不可 |
| ISO 9001 | 不可 | 不可 |
| ISO/IEC 13568（Z） | ITTF から無償入手可 | 要確認 |
| PSP/TSP（2018年 CC BY 4.0 版） | 可 | **可**（表示条件） |
| PSP/TSP（CMU 特別許諾版） | 個人利用限定 | 不可（SEI の書面許可が要る） |
| OMG 仕様書 | 要確認 | 要確認 |

**同じ「制約がある」でも中身が違う。** 第4.2章で欄を分ける。

### 3.2 REV-0004 の配置が誤り

REV-0004 第4章の構成で、次のように置いた。

```
40-software/requirements/ipa-agreement-guide.md
```

**これは誤りである。機能要件の合意形成ガイドの対象工程は外部設計工程であり、
要件定義ではない。**

これは本リポジトリが2度指摘してきた誤りと、まったく同じものである。

| 検証 | 指摘内容 |
| --- | --- |
| REV-0001 第4.3章 | 「上流（USDM や IPA のガイドライン）」という記述について、対象工程が外部設計工程であることを注意 |
| REV-0006 第5.1章 | 「IPA 要件定義書」という成果物名を誤りとして指摘 |
| **REV-0010 本項** | **REV-0004 の構成自身が同じ誤りを犯していた** |

**他人の誤りを2度指摘しておきながら、自分の構成案で同じ誤りを犯していた。**
姉妹プロジェクトの一次情報は、この誤りを「調査の過程で二次情報に見つかった誤り」として
名指しで記録している。

正しい配置は次のとおり。

```
40-software/design/ipa-agreement-guide.md
```

加えて、**工程を Front Matter に `target_phase` として持たせる**（第4.4章）。
ディレクトリ名だけに頼ると、同じ誤りがまた起きる。

### 3.3 発注者ビューガイドラインは `registered` にできない

一次資料の記述から、次が分かる。

| 事実 | 影響 |
| --- | --- |
| IPA の現行サイトに独立したページが存在しない | 一次資料の所在が通常の形で示せない |
| 成果は機能要件の合意形成ガイド（2010）に引き継がれた | 参照すべきは後継である |
| 技術領域が3つから6つへ拡張された | 後継が上位互換にあたる |
| 残る一次資料は WARP の保存版のみ | **WARP は自動取得を許可していない** |

したがって `status: registered`（選択肢として扱う）にはできない。
**系譜を記録するための項目**として置く。

| 項目 | 値 |
| --- | --- |
| `status` | `referenced-only` |
| 役割 | 後継の成立経緯を示す |
| `relates_to` | `superseded-by` → 機能要件の合意形成ガイド |

REV-0007 で `relates_to` に `succeeds` を定めたが、**逆向きの値が無い。**
第4.5章で `superseded-by` を追加する。

## 4. 欄の追加と修正

### 4.1 `kind: guideline` を追加する

REV-0002 で `standard`（ISO 9001）を、REV-0007 で `metamodel`（SPEM）を定めた。
**IPA ガイドはどちらでもない。**

| kind | 性質 | 例 |
| --- | --- | --- |
| `standard` | 要求事項。適合・不適合が判定される | ISO 9001 |
| **`guideline`** | **指針。守るべき事項を課さない** | **機能要件の合意形成ガイド、発注者ビューガイドライン** |
| `appraisal-framework` | 評定の枠組み | CMMI |

**公的機関が出したものをすべて `standard` と呼ばない。** ガイドは「コツ」を
集めたものであり、適合を判定する性質を持たない。

### 4.2 `rights` を分解する

第3.1章のとおり、1つの `terms` では表せない。

```yaml
rights:
  holder: 独立行政法人情報処理推進機構（IPA）
  redistribution: permitted        # permitted | restricted | prohibited | unknown
  derivation: prohibited           # permitted | restricted | prohibited | unknown
  attribution: 機能要件の合意形成ガイド ver.1.0、Copyright©2010 IPA
  conditions: 著作権表示を明記し、情報システム開発に携わる者が本目的のために行う場合に限る
  policy: 本リポジトリでは本文を転記も言い換えもしない
  verified: 2026-09-18
```

**`policy` を分けて持つ。** 権利上できることと、本リポジトリの運用として
やらないことは別である。これを混ぜていたために、第3.1章の誤りが生じた。

`redistribution` と `derivation` の値は次のとおり。

| 値 | 意味 |
| --- | --- |
| `permitted` | 条件を満たせばできる |
| `restricted` | 個別の許可が要る |
| `prohibited` | できない |
| `unknown` | **未確認。`status` を `referenced-only` から動かさない** |

### 4.3 `applicable_to_solo` に `partial` を追加する

REV-0002 第3.5章で `applicable_to_solo` を真偽値として導入した。
**IPA ガイドは2値で表せない。**

| 事実 | 判断 |
| --- | --- |
| 300ファンクションポイント以上、5000万円以上、10名以上、50人月以上を目安とする | 個人プロジェクトは想定外 |
| 発注者と開発者の合意形成を目的とする | 個人開発では両者が同一人物 |
| **ガイド自身が、小規模でも書き方とレビューのコツを参考にしてほしいと述べている** | **全否定ではない** |

```yaml
applicable_to_solo: partial      # true | partial | false
```

`partial` の場合、**何を読み替える必要があるかを `notes` に書く**。
姉妹プロジェクトは読み替えの内容と、それにより失われるものを記録している。
同じ扱いとする。

### 4.4 `target_phase` を追加する

第3.2章の誤りを繰り返さないために、工程を欄として持つ。

```yaml
target_phase: external-design
```

| 値 | 例 |
| --- | --- |
| `requirements` | USDM |
| **`external-design`** | **機能要件の合意形成ガイド、発注者ビューガイドライン** |
| `internal-design` | — |
| `construction` | TDD |
| `多工程` | 配列で持つ。XDDP は `[requirements, external-design, construction, test]` |

**ディレクトリで工程を表さない。** REV-0003 で確認したとおり、工程で木を切ると
複数工程にまたがるものの置き場が決まらない。`target_phase` はあくまで属性である。

### 4.5 `relates_to` に `superseded-by` を追加する

| 値 | 意味 |
| --- | --- |
| `succeeds` | 前身を引き継ぐ |
| **`superseded-by`** | **後継に引き継がれた。自身は現行でない** |

## 5. 自動取得できない一次資料がある

姉妹プロジェクトは次を記録している。

> コマンドラインのツールでは 403 が返る場合がある。IPA、AFFORDD、Mermaid の各サイトは
> 自動取得を制限しているため、`curl` や `wget` での到達確認は当てにならない

WARP（国立国会図書館インターネット資料収集保存事業）も自動取得を許可していない。

**これは `scripts/generate-views.mjs` の設計に影響する。** リンク切れの検査を
自動化できない対象がある。`sources` に確認方法を持たせる。

```yaml
sources:
  - url: https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html
    title: エンタプライズ系事業/機能要件の合意形成技法
    verify: manual              # auto | manual
    verified: 2026-08-24
```

`verify: manual` のものは、**生成スクリプトの検査対象から外し、一覧に
「手動確認」と表示する**。自動で通ったように見せてはいけない。

## 6. 構成

`40-software/` の該当部分を次のとおりとする。

```text
│   ├── requirements/
│   │   ├── README.md
│   │   └── usdm.md                       # target_phase: requirements
│   ├── design/
│   │   ├── README.md                     # 設計手法と合意形成の指針が同居することを説明
│   │   ├── ipa-agreement-guide.md        # ★追加。target_phase: external-design
│   │   ├── vendor-view-guideline.md      # ★追加。referenced-only。系譜の記録
│   │   ├── domain-driven-design.md
│   │   ├── object-oriented-design.md
│   │   ├── structured-analysis-design.md
│   │   └── jackson-system-development.md
```

`design/README.md` に次を明記する。

1. **機能要件の合意形成ガイドの対象工程は外部設計工程である**
2. 構成は概要編＋6技術領域の**全7編**であり、**概要編は技術領域ではない**
3. 二次情報に「技術領域7つ」「対象工程は要件定義」という誤りがある

第3項は、姉妹プロジェクトが実際に見つけて訂正した誤りである。
**同じ誤りを本リポジトリで繰り返さないために、名指しで書く。**

## 7. 登録例

### 7.1 機能要件の合意形成ガイド

```yaml
id: MTH-00NN
name: IPA Agreement Guide for Functional Requirements
name_ja: 機能要件の合意形成ガイド
layer: 40-software
kind: guideline
target_phase: external-design
formality: informal
verification:
  method: none
  scope: n/a
axes:
  origin: both
status: referenced-only
applicable_to_solo: partial
relates_to:
  - id: MTH-00NN            # 発注者ビューガイドライン
    relation: succeeds
    note: 技術領域が3つから6つへ拡張された
rights:
  holder: 独立行政法人情報処理推進機構（IPA）
  redistribution: permitted
  derivation: prohibited
  attribution: 機能要件の合意形成ガイド ver.1.0、Copyright©2010 IPA
  conditions: 著作権表示を明記し、情報システム開発に携わる者が本目的のために行う場合に限る
  policy: 本リポジトリでは本文を転記も言い換えもしない
  verified: 2026-09-18
sources:
  - url: https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html
    title: エンタプライズ系事業/機能要件の合意形成技法
    verify: manual
    verified: 2026-08-24
notes:
  - 策定は IPA/SEC 機能要件の合意形成技法ワーキンググループ。事業は2008〜2009年度
  - 構成は概要編＋6技術領域の全7編。概要編は技術領域ではない
  - 想定規模は300FP以上、5000万円以上、10名以上、50人月以上
  - 発注者と開発者が別であることを前提とする。個人開発では読み替えが要る
  - 著作物にあたらない事実（技術領域の区分、合意成熟度の3レベル、4つの作業の区分、工程成果物の名称）のみ参照する
```

### 7.2 発注者ビューガイドライン

```yaml
id: MTH-00NN
name: Vendor View Guideline
name_ja: 発注者ビューガイドライン
layer: 40-software
kind: guideline
target_phase: external-design
formality: informal
status: referenced-only
applicable_to_solo: partial
relates_to:
  - id: MTH-00NN            # 機能要件の合意形成ガイド
    relation: superseded-by
    note: 現行ではない。参照すべきは後継
rights:
  holder: 実践的アプローチに基づく要求仕様の発注者ビュー検討会 / IPA
  redistribution: unknown
  derivation: unknown
  verified: 未確認
sources:
  - url: https://warp.ndl.go.jp/web/20130117225954/http://sec.ipa.go.jp/reports/20080710.html
    title: 発注者ビューガイドライン（IPA 旧サイト、WARP 保存版）
    verify: manual
    verified: 未確認
notes:
  - 国内 SI 事業者9社による検討会が策定。2006年4月設立。その後 IPA/SEC へ移管
  - 対象は Web アプリケーション開発の外部設計工程
  - 構成は画面編（2007年9月）、システム振舞い編・データモデル編（2008年3月）、概説編・用語集（2008年）
  - IPA の現行サイトに独立したページが存在しない
  - 系譜の記録として置く。選択肢としては扱わない
```

## 8. 本リポジトリへ反映する決定

| # | 決定 |
| --- | --- |
| 1 | **`rights` を分解する。** `redistribution`、`derivation`、`attribution`、`conditions`、`policy` を持つ |
| 2 | **権利上できることと、運用としてやらないことを分けて書く** |
| 3 | **`ipa-agreement-guide.md` は `40-software/design/` に置く。** REV-0004 の配置を訂正 |
| 4 | **`target_phase` を追加する。** ディレクトリ名に工程の判断を委ねない |
| 5 | **`kind: guideline` を追加する。** ISO 9001 のような `standard` と区別する |
| 6 | **`applicable_to_solo` を3値にする。** `true` / `partial` / `false` |
| 7 | **`relates_to` に `superseded-by` を追加する** |
| 8 | **`sources` に `verify` を持たせる。** 自動取得できないものを検査対象から外す |
| 9 | **`design/README.md` に、二次情報に存在する2つの誤りを名指しで書く** |
| 10 | **README の「転記も言い換えもしない」は方針として維持する。** ただし権利の制約そのものとは区別して書く |

## 9. 繰り返されている指摘

| 観点 | 回数 | 状況 |
| --- | --- | --- |
| **スコープ未確定のまま構成を積んでいる** | **7回** | 未解消。IPA ガイドは外部設計工程であり、未決事項1の答え次第でまるごと対象外になる |
| IPA ガイドの対象工程の誤り | **3回** | **今回は本リポジトリ自身の誤りだった。** 決定4と9で構造的に潰す |
| 権利制約の扱い | 6回 | 本書で欄を分解。ADR-0002 で実装する |
| 形式手法との誤った対比 | 3回 | REV-0008 の `formality` で解決済み |

**指摘した誤りを、自分の構成案で犯していた。** 他の文書を検証するときと同じ厳しさを、
自分が書いた構成にも向ける必要がある。REV-0009 第2.4章の教訓と同じ性質の失敗である。

## 10. ADR-0001 の未決事項への影響

| # | 未決事項 | 本検証による変化 |
| --- | --- | --- |
| 1 | 上流工程を含むかどうか | **影響が具体化した。** 機能要件の合意形成ガイドと発注者ビューガイドラインは外部設計工程を対象とする。含まない場合、今回の2件は登録できない |
| 2 | 複数工程にまたがる手法の置き場 | 解消済み。`target_phase` が配列を取れる |
| 3 | `references-usdm-ipa.md` の移設可否 | **判断材料が増えた。** 同ファイルは権利条件を対象ごとに記録している。移設するなら本書の `rights` 欄の形式に変換する必要がある |
| 4 | 文書の粒度と命名規則 | 変化なし |
| 5 | ソフトウェア工学以外を含むか | 変化なし |
| 6 | ライセンス | **判断材料が増えた。** IPA ガイドは再配布可・翻案不可である。本リポジトリを MIT のままにすると、この条件と整合しない |
