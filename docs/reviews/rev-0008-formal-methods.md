---
id: REV-0008
title: 形式手法の組み入れと formality 欄の追加
status: reviewed
date: 2026-09-17
author: Kazuyuki Kuribayashi
related: ADR-0001, REV-0001, REV-0002, REV-0003, REV-0004, REV-0005, REV-0006, REV-0007
---

# REV-0008 形式手法の組み入れと formality 欄の追加

## 1. 本書の位置づけ

Z 言語、VDM、Alloy、TLA+ をリポジトリへ組み入れる構成を検討し、
REV-0001 から REV-0007 までの決定と突き合わせて検証した。

本書には、構成案とその検証の両方を含む。

## 2. 検証で見つかった最も重要なこと

**同じ誤りが3回繰り返された原因は、登録フォーマットに形式性を表す欄が
無かったことである。**

| 検証 | 対象 | 誤り |
| --- | --- | --- |
| REV-0001 第4.1章 | USDM | 形式手法の系統として説明されていた |
| REV-0006 第3.3章 | PFD | Z 言語や Alloy になぞらえられていた |
| REV-0007 第3.2章 | SPEM | 同上 |

これまで定めた欄（`kind`、`notation_of`、`metamodel_of`）は、**いずれも
「何を記述するか」を表すもので、「どの程度厳密に記述するか」を表さない。**

USDM も Z 言語も `kind: notation` である。両者を区別する欄が無かったため、
同じ取り違えが対象を変えて再発した。

**`formality` 欄を追加する。** これが本書の中心的な提案である。

```yaml
formality: formal           # informal | semi-formal | formal
```

| 値 | 意味 | 該当するもの |
| --- | --- | --- |
| `informal` | 自然言語による記述 | 一般の仕様書 |
| `semi-formal` | 構造は定まるが、意味論は数学的に定義されていない | **USDM、UML、SysML、PFD、SPEM** |
| `formal` | 意味論が数学的に定義され、機械的な検査の対象になりうる | **Z、VDM、Alloy、TLA+** |

REV-0007 の決定7で「`formal-methods/README.md` に、USDM・PFD・SPEM が形式手法で
ない理由を書く」と決めた。**文章で書くだけでは4回目が起きる。** 欄として持たせ、
`views/` で一覧できるようにする。

## 3. 4つを一括りにできない

`formal-methods/` に4つを並べると、同じ目的の道具に見える。実際は目的が違う。

| | Z | VDM | Alloy | TLA+ |
| --- | --- | --- | --- | --- |
| 基礎 | ZF 集合論と一階述語論理 | モデルベース仕様 | 一階関係論理 | 時相論理と集合論 |
| 主な対象 | 状態とデータの仕様 | 状態とデータ、実装への段階的詳細化 | 構造と制約。設計の探索 | 並行・分散系の振る舞い |
| 検証の方法 | 証明（支援ツールあり） | 証明と実行による検査 | SAT による**有界**なモデル探索 | モデル検査（TLC）と証明（TLAPS） |
| 見つかるもの | 仕様の矛盾 | 詳細化の誤り | **反例**（指定した範囲内） | 安全性と活性の違反 |
| 起源 | Abrial（1977）、Oxford の PRG | IBM ウィーン研究所（1970年代） | Jackson、MIT。Z の影響を受ける | Lamport |

**Alloy は「証明する」道具ではない。** 指定した有限の範囲（scope）の中で反例を探す。
反例が見つからないことは、その範囲で見つからなかったという意味であって、
正しさの証明ではない。

**TLA+ の TLC も有限状態の探索である。** 無限の状態空間に対する証明は TLAPS が担う。

したがって選択ガイドでは「形式手法を選ぶ」では決まらない。
**何を確かめたいのかで4つは分かれる。**

## 4. 権利の扱いが4つで異なる

REV-0002 で ISO 9001 について「有料の規格票。本文の複製・再配布はできない」と
記録した。**これを ISO 規格すべてに当てはめると誤る。**

| 対象 | 一次資料 | 入手 |
| --- | --- | --- |
| **Z** | ISO/IEC 13568:2002 | **ISO の ITTF サイトから無償で入手できる。** 技術正誤票も無償 |
| **VDM** | ISO/IEC 13817-1:1996（VDM-SL 基底言語） | 購入が必要と見られる。**要確認** |
| **Alloy** | alloytools.org、Jackson の著書 | ツールは公開。著書は著作物 |
| **TLA+** | Lamport が公開している資料とツール | 公開。**要確認** |

**Z と VDM は同じ ISO 規格でありながら入手条件が違う。** `rights` 欄を
一律に書かず、対象ごとに確認する。確認できていないものは
`rights.verified: 未確認` のままとし、`status: referenced-only` から動かさない。

## 5. 構成（`40-software/formal-methods/` 部分）

```text
│   ├── formal-methods/
│   │   ├── README.md                 # 定義、4つの比較表、semi-formal との違い
│   │   ├── z-notation.md             # formality: formal
│   │   ├── vdm.md                    # formality: formal
│   │   ├── alloy.md                  # formality: formal
│   │   └── tla-plus.md               # formality: formal
```

### 5.1 サブディレクトリに分けない

「状態ベース（Z、VDM）」と「時相・並行（TLA+）」に分けたくなるが、**分けない。**

REV-0003 第3.1章と REV-0004 第3.1章で確認したとおり、**1つの分類を木に焼き付けると、
他の分類が見えなくなる。** 状態ベースか時相かは第3章の表と `verification` 欄で表す。

### 5.2 依頼にないものを作らない

B-Method、Event-B、Isabelle/HOL、Coq、SPIN / Promela は、いずれも関連するが
**今回の依頼に含まれない。ファイルを作らない。**

REV-0005 第5章と REV-0006 第7章で「依頼にない追加」と「出典のない記述」を
指摘した以上、本書でも同じ規律を守る。`README.md` に**登録候補として名前だけ**記す。

## 6. Front Matter の拡張

### 6.1 `formality`（第2章）

### 6.2 `verification`

4つの違いを表すために追加する。

```yaml
verification:
  method: model-checking      # model-checking | theorem-proving | both | none
  scope: bounded              # bounded | unbounded | n/a
  tools: [Alloy Analyzer]
```

`semi-formal` と `informal` のものは `method: none`、`scope: n/a` とする。
**この2欄があると、`views/by-formality.md` で「検査できるもの」と
「検査できないもの」が一覧で分かれる。**

### 6.3 登録例

```yaml
id: MTH-00NN
name: Alloy
name_ja: Alloy
layer: 40-software
kind: notation
notation_of: software
formality: formal
verification:
  method: model-checking
  scope: bounded
  tools: [Alloy Analyzer]
axes:
  origin: both
status: referenced-only
applicable_to_solo: true
relates_to:
  - id: MTH-00NN            # Z
    relation: succeeds
    note: Z の影響を受けて作られた
rights:
  holder: MIT / Daniel Jackson ほか
  terms: ツールの配布条件と著書の扱いを分けて確認する
  verified: 未確認
sources:
  - https://alloytools.org/
notes:
  - 指定した有限の範囲で反例を探す。反例が無いことは正しさの証明ではない
```

## 7. 全体構成（統合版）

REV-0004 から REV-0008 までの決定を反映した現時点の全体像を示す。

```text
software-engineering-bok/
├── README.md                          # 目的、全体像、並べている軸の宣言
├── docs/
│   ├── adr/
│   ├── reviews/
│   └── conventions/
│       ├── axes.md                    # 8軸の定義
│       ├── method-entry-format.md     # Front Matter の仕様
│       └── layer-definitions.md       # 各階層に置くもの、置かないもの
│
├── guides/
│   └── selection/
│       ├── README.md                  # 軸ごとに選ぶ手順
│       └── combinations.md            # 依存と、両立しない組み合わせ
│
├── 10-organization/                   # 組織・品質マネジメント層 (Macro)
│   ├── README.md
│   ├── cmmi.md
│   ├── people-cmm.md
│   ├── iso-9001.md
│   └── iso-iec-90003.md
│
├── 20-system/                         # システム全体を対象とする層
│   ├── README.md
│   ├── sebok.md                       # 参照のみ。別分野の知識体系
│   ├── sysml.md
│   └── software-product-lines.md
│
├── 30-team/                           # チーム開発プロセス層 (Mid)
│   ├── README.md
│   ├── process-modeling/
│   │   ├── README.md
│   │   ├── spem.md                    # kind: metamodel
│   │   └── pfd.md                     # kind: notation
│   ├── rup.md
│   ├── tsp.md
│   └── xddp/
│       ├── README.md
│       ├── change-request-spec.md     # 3点セット①
│       ├── spec-out-and-tm.md         # 3点セット②
│       ├── change-design-doc.md       # 3点セット③
│       ├── coding-restraint.md
│       └── process-separation.md
│
├── 40-software/                       # ソフトウェアそのものを対象とする層
│   ├── README.md
│   ├── requirements/                  # ★着手点
│   │   ├── README.md                  # IPA ガイドの対象工程は外部設計工程
│   │   ├── usdm.md
│   │   └── ipa-agreement-guide.md
│   ├── design/
│   │   ├── README.md                  # 構造化手法の系統の違い
│   │   ├── domain-driven-design.md
│   │   ├── object-oriented-design.md
│   │   ├── structured-analysis-design.md
│   │   └── jackson-system-development.md
│   ├── notations/
│   │   ├── README.md
│   │   ├── uml.md
│   │   └── mermaid.md
│   ├── formal-methods/                # ★本書で追加
│   │   ├── README.md
│   │   ├── z-notation.md
│   │   ├── vdm.md
│   │   ├── alloy.md
│   │   └── tla-plus.md
│   └── ai-assisted/
│       ├── README.md
│       └── spec-driven-development.md
│
├── 50-individual/                     # 個人の品質・規律層 (Micro)
│   ├── README.md
│   ├── psp.md                         # 参照のみ。CMU のサービスマーク
│   └── test-driven-development.md
│
├── references/
│   └── references-usdm-ipa.md
│
├── views/                             # 生成物。手で編集しない
│   ├── by-kind.md
│   ├── by-formality.md                # ★本書で追加
│   ├── by-rights.md
│   └── by-status.md
│
└── scripts/
    └── generate-views.mjs
```

## 8. 本回答自身の検証

過去7本の決定に照らして自己点検した結果を記す。

| 確認項目 | 結果 |
| --- | --- |
| `docs/` を維持したか（REV-0004 決定4） | **維持した** |
| 葉をファイルにしたか（REV-0004 決定3） | **した** |
| 中身が1つのディレクトリを作っていないか（REV-0006 決定5） | **作っていない。** `formal-methods/` は4件 |
| `rights` を書いたか（REV-0002 決定3） | **書いた。** 第4章。4つで条件が違うことを明示した |
| 依頼にない手法を追加していないか（REV-0005） | **していない。** B-Method 等は名前のみ |
| 出典のない断定をしていないか（REV-0006 第7章） | **未確認のものは「要確認」と記した** |
| 評価的な形容を使っていないか（REV-0007 第9章） | **使っていない** |
| 1つの分類を木に焼き付けていないか（REV-0003、REV-0004） | **いない。** サブディレクトリに分けなかった |
| スコープの先取りをしていないか | **している。** 第10章参照 |

**最後の1項目は解消していない。** 形式手法は仕様記述であり、上流工程に属する。
未決事項1（上流工程を含むか）が「含まない」に決まれば、`formal-methods/` は
まるごと対象外になる。**6回連続で同じ先取りをしている。**

## 9. 本リポジトリへ反映する決定

| # | 決定 |
| --- | --- |
| 1 | **`formality` 欄を追加する。** 値は `informal` / `semi-formal` / `formal` |
| 2 | **`verification` 欄を追加する。** `method`、`scope`、`tools` を持つ |
| 3 | **既存の登録に遡って `formality` を付ける。** USDM、UML、SysML、PFD、SPEM は `semi-formal` |
| 4 | **`views/by-formality.md` を生成する** |
| 5 | **形式手法をサブディレクトリに分けない。** 違いは README の表と欄で表す |
| 6 | **B-Method、Event-B、Isabelle、Coq、SPIN は登録候補として名前のみ記す** |
| 7 | **Z と VDM の入手条件を個別に確認する。** ISO 規格を一律に扱わない |
| 8 | **Alloy と TLC が有界であることを `notes` に書く。** 反例が無いことは証明ではない |

## 10. 繰り返されている指摘

| 観点 | 回数 | 状況 |
| --- | --- | --- |
| **スコープ未確定のまま構成を積んでいる** | **6回** | **未解消。ADR-0002 で決める以外にない** |
| 権利制約の欠落 | 5回 | 本書で `rights` を書いた。フォーマット実装で恒久化する |
| 形式手法との誤った対比 | 3回 | **本書の `formality` 欄で構造的に解決** |
| 検証結果を土台にしない構成案 | 3回 | 本書は土台にした |
| UML の置き場が無い | 4回 | 第7章に `40-software/notations/uml.md` を明記 |
| JSD を構造化手法の代表とする | 3回 | 第7章で別ファイルに分離 |
| IPA ガイドの対象工程の誤り | 2回 | 第7章の `requirements/README.md` に明記 |

**8本の検証で、構成に関する論点はほぼ出尽くした。** 残る最大の未解決は
スコープである。これは検証では決まらない。

## 11. ADR-0001 の未決事項への影響

| # | 未決事項 | 本検証による変化 |
| --- | --- | --- |
| 1 | 上流工程を含むかどうか | **影響範囲が最大になった。** 含まない場合、`formal-methods/`、`requirements/`、`design/`、`notations/` がまとめて対象外になる |
| 2 | 複数工程にまたがる手法の置き場 | 解消済み |
| 3 | `references-usdm-ipa.md` の移設可否 | 変化なし |
| 4 | 文書の粒度と命名規則 | **第7章が確定案。** ADR-0002 で追認すること |
| 5 | ソフトウェア工学以外を含むか | 変化なし |
