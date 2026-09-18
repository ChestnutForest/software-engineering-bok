# software-engineering-bok

ソフトウェア工学の手法を、**一次情報の参照集**として集めるリポジトリ。

BoK は Body of Knowledge（知識体系）の略である。名前は
[SWEBOK Guide](https://www.computer.org/education/bodies-of-knowledge/software-engineering)
と同じ語彙を採っているが、**IEEE Computer Society の SWEBOK Guide とは無関係**の
個人リポジトリである。

---

## このリポジトリが書くもの・書かないもの

各手法の解説は**書かない**。置くのは次の3つだけである。

1. 一次資料の所在（URL、書誌）
2. 独自に構成した判断軸（どの軸で、何を、なぜ選ぶか）
3. 使用条件（権利者と制約）

**本文の転記も言い換えもしない。** 扱う対象には、ISO 規格、CMMI、PSP/TSP、RUP、
OMG 仕様書のように、複製や翻案が制限されるものが含まれる。姉妹リポジトリで
確立した「一次資料に当たる」「転記と翻案を避ける」という原則をそのまま引き継ぐ。

各エントリの `rights` 欄に権利者と制約を書く。**書けない項目は登録しない。**

---

## 現在の状態

**まだ設計段階である。** 収録は始まっていない。

IPAの2資料の組み入れに向けた再検証は
[REV-0011](docs/reviews/rev-0011-ipa-integration-audit.md)に記録した。
修正案と、手法エントリの正式登録は区別して管理する。

```
software-engineering-bok/
├── README.md
├── LICENSE          ← 見直し予定（ADR-0003）
└── docs/
    ├── adr/         ← 決定記録
    └── reviews/     ← 検証記録（11本）
```

収録を始める前に決めることが2つ残っている。

| # | 未決事項 | 影響 |
| --- | --- | --- |
| 1 | 上流工程（要件定義・設計）を含むか | 含まない場合、形式手法・要件工学・設計手法がまとめて対象外になる |
| 2 | ソフトウェア工学以外（システムズエンジニアリング、組織品質マネジメント）を含むか | 含まない場合、SEBoK・ISO 9001・CMMI が対象外になる |

いずれも ADR-0002 で決める。**決まるまでディレクトリを作らない。**

---

## 並べている軸

収録を始めたら、ディレクトリの階層は**「適用範囲と対象」の1軸**で並べる。

```
10-organization/   組織が採る枠組み
20-system/         システム全体を対象とするもの
30-team/           チームの進め方
40-software/       ソフトウェアそのものを対象とするもの
50-individual/     個人の規律
```

**この階層は唯一の分類ではない。** ディレクトリで表せない軸は各ファイルの
Front Matter に持たせ、`views/` に一覧を生成する。

| 軸 | 選択肢の例 |
| --- | --- |
| パラダイム | 構造化 / オブジェクト指向 / 関数型 |
| 設計アプローチ | DDD / トランザクションスクリプト |
| プロセス | RUP / スクラム / XDDP / V字 |
| 記法 | UML / SysML / PFD / Mermaid |
| 再利用戦略 | SPLE / 都度開発 |
| 実装プラクティス | TDD / Spec 駆動 / AI 駆動 |
| 適用範囲 | 組織 / チーム / 個人 |
| 開発の起点 | 新規（greenfield）/ 派生（derivative）/ 両方 |

軸のあいだには依存がある。DDD はオブジェクト指向を前提とし、XDDP は母体が
無いと適用できない。**軸を独立に選べるわけではない。**

加えて、形式性（`informal` / `semi-formal` / `formal`）と検証方法を欄として持つ。
USDM、UML、PFD、SPEM は `semi-formal` であり、**形式手法ではない。**
Z、VDM、Alloy、TLA+ が `formal` である。

---

## 文書

### 決定記録

| ID | 内容 |
| --- | --- |
| [ADR-0001](docs/adr/adr-0001-repository-naming.md) | リポジトリ名の選定 |

### 検証記録

| ID | 内容 |
| --- | --- |
| [REV-0001](docs/reviews/rev-0001-methodology-selection-guide.md) | メソドロジー選択ガイド。6軸の定義 |
| [REV-0002](docs/reviews/rev-0002-process-standards-and-boks.md) | プロセス標準と知識体系。権利制約と第7軸 |
| [REV-0003](docs/reviews/rev-0003-directory-structure.md) | ディレクトリ構成の初案 |
| [REV-0004](docs/reviews/rev-0004-layered-tree-reconciled.md) | 階層ツリーと軸の両立。**REV-0003 第7章を置き換え** |
| [REV-0005](docs/reviews/rev-0005-xddp-placement.md) | XDDP の配置。3点セットと第8軸 |
| [REV-0006](docs/reviews/rev-0006-pfd-placement.md) | PFD の配置。記法とプロセスの区別 |
| [REV-0007](docs/reviews/rev-0007-spem-placement.md) | SPEM の配置。RUP との前後関係 |
| [REV-0008](docs/reviews/rev-0008-formal-methods.md) | 形式手法。`formality` 欄の追加 |
| [REV-0009](docs/reviews/rev-0009-cross-repository-audit.md) | リポジトリ横断監査 |
| [REV-0010](docs/reviews/rev-0010-ipa-guidelines.md) | IPAガイドラインの組み入れとrights欄の分解。再検証はREV-0011を参照 |
| [REV-0011](docs/reviews/rev-0011-ipa-integration-audit.md) | IPAの2資料の一次情報照合と、全体整合性の再検証 |

---

## 姉妹リポジトリ

要件定義と設計の一次情報（USDM、XDDP、IPA の各ガイドライン）は、
[`paper-repro`](https://github.com/ChestnutForest/paper-repro) の
[`docs/references-usdm-ipa.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/references-usdm-ipa.md)
にある。本リポジトリへ移設するか、相互参照にとどめるかは未定である。

> **参照先について** — 訂正済みの[REV-0009](docs/reviews/rev-0009-cross-repository-audit.md)のとおり、
> `paper-repro-mvp` は `paper-repro` の旧名であり、同一リポジトリである。
> 本リポジトリでは現行名の `paper-repro` を参照する。

ソフトウェアプロセス（PSP / TSP）の実装は
[`processloop`](https://github.com/ChestnutForest/processloop) にある。

---

## ライセンス

本リポジトリの自作部分は[MIT License](LICENSE)の下で提供する。
参照先の第三者資料をMITで再許諾するものではなく、その利用には各資料の使用条件が適用される。

文書向けライセンスへの変更は検討事項であるが、第三者資料を参照することだけを理由に
MITとの不整合とは判断しない。[REV-0011のF02](docs/reviews/rev-0011-ipa-integration-audit.md)を参照。
