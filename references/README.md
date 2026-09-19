# 参考文献

各手法の一次資料を、リポジトリの階層順に並べる。

**確認の状態を必ず併記する。** URL は `paper-repro` の
[`docs/references-usdm-ipa.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/references-usdm-ipa.md)
で確認済みのもの、本リポジトリで確認したもの、未確認のものを区別する。

| 記号 | 意味 |
| --- | --- |
| ✅ | URL の所在を確認済み。日付を併記 |
| 📖 | 書籍。書誌のみ記載し、URL は持たない |
| ⚠️ | **未確認。** 参照する前に自分で確かめること |

> **IPA、AFFORDD、WARP、Mermaid の各サイトは自動取得を制限している。**
> `curl` や `wget` での到達確認は当てにならない。ブラウザで開いて確認すること。
> 各エントリの `sources` では `verify: manual` とする。

---

## 10-organization

### CMMI

| 資料 | URL | 確認 |
| --- | --- | --- |
| CMMI Institute（ISACA） | <https://cmmiinstitute.com/> | ✅ 2026-09-17 |
| SEI（策定元。カーネギーメロン大学） | <https://www.sei.cmu.edu/> | ✅ 2026-09-17 |

**V3.0（2023年4月）。** CMU で開発され、2012年に CMMI Institute が設立、2016年3月に
ISACA が買収した。商標は CMU が USPTO に登録している。モデル本文は有償ライセンス。

### People CMM

| 資料 | 確認 |
| --- | --- |
| SEI の技術報告書 | ⚠️ 資料ごとに配布条件が異なる。個別に確認 |

独立モデルとしては旧世代。人材面は CMMI V3.0 の People Management ドメインが担う。⚠️

### ISO 9001 / ISO/IEC 90003

| 資料 | URL | 確認 |
| --- | --- | --- |
| ISO 9001（品質マネジメントシステム — 要求事項） | <https://www.iso.org/iso-9001-quality-management.html> | ✅ 2026-09-17 |
| ISO/IEC 90003（ソフトウェアへの適用指針） | ⚠️ ISO のカタログで検索 | ⚠️ |

**規格票は有料であり、本文の複製・再配布はできない。** 言及は規格番号と表題にとどめる。

関連する規格として、ライフサイクルプロセスの ISO/IEC/IEEE 12207、
プロセスアセスメントの ISO/IEC 33000 シリーズがある。⚠️

---

## 20-system

### SEBoK

| 資料 | URL | 確認 |
| --- | --- | --- |
| SEBoK（sebokwiki） | <https://www.sebokwiki.org/> | ✅ 2026-09-17 |
| BKCASE プロジェクト | <https://www.bkcase.org/> | ✅ 2026-09-17 |

**別分野（システムズエンジニアリング）の知識体系である。** INCOSE、IEEE Systems Council、
Stevens Institute（SERC）の3者が steward を務める。wiki として継続更新。

SEBoK 自身が「compendium ではなく既存の文献を参照するもの」と述べている。
**指し示すための記述的な文書であり、選択を助ける規範的な文書ではない。**

### SysML

| 資料 | URL | 確認 |
| --- | --- | --- |
| OMG SysML 仕様 | <https://www.omg.org/spec/SysML/> | ✅ 2026-09-17 |

UML プロファイル。Mermaid の Requirement Diagram は SysML 1.6 に準拠する。

### ソフトウェアプロダクトライン（SPLE）

| 資料 | URL / 書誌 | 確認 |
| --- | --- | --- |
| SEI Software Product Lines Collection | <https://insights.sei.cmu.edu/library/software-product-lines-collection/> | ✅ 2026-09-17 |
| Paul Clements, Linda Northrop『Software Product Lines: Practices and Patterns』Addison-Wesley, 2001 | — | 📖 ⚠️ 書誌未再確認 |
| Klaus Pohl, Günter Böckle, Frank van der Linden『Software Product Line Engineering』Springer, 2005 | — | 📖 ⚠️ 書誌未再確認 |

SEI の枠組みは、コア資産開発・製品開発・マネジメントの3つの活動からなる。⚠️

---

## 30-team

### RUP

| 資料 | 書誌 | 確認 |
| --- | --- | --- |
| Philippe Kruchten『The Rational Unified Process: An Introduction』Addison-Wesley | 第3版 2003 | 📖 ⚠️ 書誌未再確認 |

**IBM の proprietary な成果物であり、教材の再配布はできない。** 現在は活発に更新されていない。
RUP は SPEM より先に存在する（1998年ごろ確立、SPEM 1.0 は2001年11月採択）。

### SPEM

| 資料 | URL | 確認 |
| --- | --- | --- |
| OMG SPEM 2.0 仕様 | <https://www.omg.org/spec/SPEM/2.0/> | ✅ 2026-09-17 |

SPEM 1.0 は2001年11月に OMG の標準として採択。SPEM 2.0 は2008年公開（formal/2008-04-01）。
仕様書は無償で入手できるが著作物である。

**SPEM 1.0 の仕様書は、その目的に「Rational Unified Process のように UML の使用を伴う
プロセスを含む、ソフトウェア開発プロセスの定義を支援すること」を挙げている。**
SPEM は RUP を記述対象の代表例として想定して作られた側である。

### PFD

| 資料 | URL | 確認 |
| --- | --- | --- |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | ✅ 2026-08-26 |
| XDDP による派生開発ソフトウェア品質向上の取り組み（Panasonic、19ページ） | <https://affordd.jp/previous/conference2010/xddp2010_P7.pdf> | ✅ 2026-08-26 |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 📖 ✅ 2026-08-26 |

PFD は XDDP の文脈で紹介されるが、XDDP 専用ではない。**記法であってプロセスではない。**
Panasonic の資料が PFD によるプロセス設計と組織導入の観点を扱う。

### TSP

| 資料 | 書誌 | 確認 |
| --- | --- | --- |
| Watts S. Humphrey『Introduction to the Team Software Process』Addison-Wesley, 2000 | — | 📖 ⚠️ 書誌未再確認 |
| Watts S. Humphrey『TSP: Leading a Development Team』Addison-Wesley, 2006 | — | 📖 ⚠️ 書誌未再確認 |
| SEI Digital Library | <https://www.sei.cmu.edu/> から辿る | ⚠️ |

**TSP は CMU のサービスマークである。** 教材の版により条件が異なる。
2018年に CC BY 4.0 で公開された PSP/TSP 教材があるとされるが、**本リポジトリでは未確認**。
参照する際は、どの版かを必ず記録すること。⚠️

導入には訓練を受けたコーチが要る。文書を読むだけでは適用できない。⚠️

### XDDP

**一次資料（AFFORDD 公式）— 優先して読むもの**

| 資料 | URL | 確認 |
| --- | --- | --- |
| AFFORDD 研究会 成果物一覧 | <https://affordd.jp/previous/results.shtml> | ✅ 2026-08-26 |
| えくす・でぃ・でぃ・ぴぃ概論＆入門ワークショップ（54ページ、2016） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_XDDP.pdf> | ✅ **本文取得済** 2026-08-26 |
| AFFORDD の活動と XDDP の成り立ち（23ページ） | <https://affordd.jp/wp-content/uploads/et2018/ET2018_01.pdf> | ✅ 2026-08-26 |

**演習用**

| 資料 | URL | 確認 |
| --- | --- | --- |
| 入門ワークショップ用 TM（1ページ） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_TM.pdf> | ✅ 2026-08-26 |
| 入門ワークショップ用 母体仕様書（6ページ） | <https://affordd.jp/previous/conference2016/affordd_conference2016_ws_Specification.pdf> | ✅ 2026-08-26 |

**適用事例**

| 資料 | 内容 | URL | 確認 |
| --- | --- | --- | --- |
| 制御モデルの仕様化と派生開発への展開（トヨタ自動車、26ページ） | **従来の設計書を変更設計書として活用したテーラリング例** | <https://affordd.jp/previous/conference2021/affordd_conference2021_toyota.pdf> | ✅ 2026-08-26 |
| 公共系システムでの XDDP 実践（42ページ） | **XDDP は組込み専用ではない**ことを示す | <https://affordd.jp/previous/conference2017/affordd_conference2017_p3.pdf> | ✅ 2026-08-26 |
| XDDP 導入してから3年経ちました（53ページ） | 定着、変更設計書レビュー、正式仕様書の更新 | <https://affordd.jp/previous/conference2019/affordd_conference2019_session2.pdf> | ✅ 2026-08-26 |
| ソースコード主体からモデル主体の派生開発へ（35ページ） | 変更スコープ特定図、クラスレベルの TM | <https://affordd.jp/previous/conference2013/xddp2013_p4.pdf> | ✅ 2026-08-26 |

**原典**

| 書籍 | URL | 確認 |
| --- | --- | --- |
| 清水吉男『「派生開発」を成功させるプロセス改善の技術と極意』技術評論社, 2007 | <https://gihyo.jp/book/2007/978-4-7741-3249-5> | 📖 ✅ 2026-08-26 |

**⚠️ 根拠にしない二次資料** — 解説として有用だが AFFORDD 公式でも原典でもない。
エクスモーション、Eureka Box の各解説記事、および発行主体を確認できない個人サイトの資料。
`references-usdm-ipa.md` に一覧がある。

---

## 40-software

### SWEBOK

| 資料 | URL | 確認 |
| --- | --- | --- |
| SWEBOK Guide（IEEE Computer Society） | <https://www.computer.org/education/bodies-of-knowledge/software-engineering> | ✅ 2026-09-17 |

**V4.0（2024年）。18の知識領域からなる。** 主要概念を要約し、詳細は参考文献の一覧で示す構成である。
目的の1つに「他分野との境界を明確にすること」を掲げており、システムズエンジニアリングは
定義せず関連分野として扱う。

本リポジトリの名前はこの語彙を借りたものであり、**IEEE CS の SWEBOK Guide とは無関係**である。

### USDM

| 資料 | URL | 確認 |
| --- | --- | --- |
| AFFORDD 研究会 成果物一覧 | <https://affordd.jp/previous/results.shtml> | ✅ 2026-08-26 |
| USDM 小冊子 基礎編 ver 1.3（2016） | <https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-basic_1.3.pdf> | ✅ 2026-08-26 |
| USDM 小冊子 付録編 ver 1.3（2016） | <https://affordd.jp/previous/tech_documents/affordd-t2-usdmtext-appendix_1.3.pdf> | ✅ 2026-08-26 |
| 清水吉男『【改訂第2版】要求を仕様化する技術・表現する技術』技術評論社, 2010 | <https://gihyo.jp/book/2010/978-4-7741-4257-9> | 📖 ✅ 2026-08-26 |

**原典は書籍であり、小冊子はこの本をもとにしている。**
要求・理由・説明・仕様グループ・仕様の5要素からなる階層構造を定める。
**記述法であって形式手法ではない。**

### 機能要件の合意形成ガイド（IPA、2010年3月）

**総合ページ**

| 資料 | URL | 確認 |
| --- | --- | --- |
| エンタプライズ系事業/機能要件の合意形成技法 | <https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html> | ✅ **本文取得済** 2026-08-24 |

背景、合意成熟度の3レベル、4つの作業、コツの定義と留意点、利用シーンがまとまっている。
**全体像を知るにはここから読むのが早い。**

**各分冊（全7編）** — 概要編＋6技術領域。**概要編は技術領域ではない。**

| # | 分冊 | URL | 確認 |
| --- | --- | --- | --- |
| 1 | 概要編 | <https://www.ipa.go.jp/archive/files/000004517.pdf> | ✅ 2026-08-10 |
| 2 | システム振舞い編 | <https://www.ipa.go.jp/archive/files/000004525.pdf> | ✅ 2026-08-10 |
| 3 | 画面編 | <https://www.ipa.go.jp/archive/files/000004521.pdf> | ✅ 2026-08-10 |
| 4 | データモデル編 | <https://www.ipa.go.jp/archive/files/000004509.pdf> | ✅ 2026-08-10 |
| 5 | 外部インタフェース編 | <https://www.ipa.go.jp/archive/files/000004513.pdf> | ✅ 2026-08-10 |
| 6 | バッチ編 | <https://www.ipa.go.jp/archive/files/000004501.pdf> | ✅ 2026-08-10 |
| 7 | 帳票編 | <https://www.ipa.go.jp/archive/files/000004505.pdf> | ✅ 2026-08-10 |

**説明資料**

| 資料 | URL | 確認 |
| --- | --- | --- |
| 「機能要件の合意形成ガイド」説明資料（PowerPoint、2011年6月） | <https://www.ipa.go.jp/archive/files/000028868.ppt> | ✅ 2026-08-10 |

**使用条件** — 著作権は IPA が保有する。著作権表示を明記すれば、情報システム開発に
携わる者が本目的のために**無償で複製・再配布できる**。ただし**改変・翻案は禁じられている**。

出典表記: 機能要件の合意形成ガイド ver.1.0、Copyright©2010 IPA

**対象工程は外部設計工程である。要件定義ではない。**
二次情報には、技術領域を7つとする記述と、対象工程を要件定義とする記述の2つの誤りが実在する。

想定規模は 300ファンクションポイント以上、5000万円以上、10名以上、50人月以上。
ただしガイド自身が、小規模でも書き方とレビューのコツを参考にしてほしいと述べている。

### 発注者ビューガイドライン（2007〜2008年）

| 資料 | URL | 確認 |
| --- | --- | --- |
| 発注者ビューガイドライン（IPA 旧サイト、WARP 保存版） | <https://warp.ndl.go.jp/web/20130117225954/http://sec.ipa.go.jp/reports/20080710.html> | ⚠️ **未再確認** |

**IPA の現行サイトに独立したページは存在しない。** 成果は機能要件の合意形成ガイド（2010）に
引き継がれ、技術領域も3つから6つに拡張された。**参照すべきは後継である。**

⚠️ WARP は自動取得を許可していないため、ブラウザで直接開く必要がある。

構成は画面編（2007年9月）、システム振舞い編・データモデル編（2008年3月）、
概説編・用語集（2008年）。国内 SI 事業者9社による「実践的アプローチに基づく要求仕様の
発注者ビュー検討会」（2006年4月設立）が策定し、その後 IPA/SEC に移管された。

### 設計手法

| 手法 | 書誌 | 確認 |
| --- | --- | --- |
| ドメイン駆動設計 | Eric Evans『Domain-Driven Design』Addison-Wesley, 2003 | 📖 ⚠️ 書誌未再確認 |
| 構造化分析 | Tom DeMarco『Structured Analysis and System Specification』Yourdon Press, 1979 | 📖 ⚠️ 書誌未再確認 |
| 構造化設計 | Edward Yourdon, Larry Constantine『Structured Design』Prentice Hall, 1979 | 📖 ⚠️ 書誌未再確認 |
| JSD | Michael A. Jackson『System Development』Prentice Hall, 1983 | 📖 ⚠️ 書誌未再確認 |

**JSD は DeMarco / Yourdon 系の構造化分析・設計とは別系統である。** 同じ節に並べない。

### 記法

| 資料 | URL | 確認 |
| --- | --- | --- |
| OMG UML 仕様 | <https://www.omg.org/spec/UML/> | ✅ 2026-09-17 |
| Mermaid 公式ドキュメント | <https://mermaid.js.org/intro/> | ✅ 2026-08-10 |
| Mermaid Requirement Diagram（SysML 1.6 準拠） | <https://mermaid.js.org/syntax/requirementDiagram.html> | ✅ 2026-08-10 |
| draw.io の Mermaid 編集機能 | <https://www.drawio.com/blog/mermaid-updates/> | ✅ 2026-08-10 |

**UML はプロセスを規定しない。** 記法であって開発手法ではない。

### 形式手法

| 手法 | 一次資料 | 確認 |
| --- | --- | --- |
| Z 記法 | ISO/IEC 13568:2002。**ISO の ITTF サイトから無償で入手できる**（技術正誤票も） | ⚠️ URL 未取得 |
| Z 記法 | J. M. Spivey『The Z Notation: A Reference Manual』第2版, Prentice Hall, 1992 | 📖 ⚠️ 書誌未再確認 |
| VDM | ISO/IEC 13817-1:1996（VDM-SL 基底言語）。**購入が必要と見られる** | ⚠️ 要確認 |
| Alloy | <https://alloytools.org/> | ⚠️ URL 未再確認 |
| Alloy | Daniel Jackson『Software Abstractions』MIT Press, 2006（第2版 2012） | 📖 ⚠️ 書誌未再確認 |
| TLA+ | Leslie Lamport が公開している資料とツール | ⚠️ URL 未取得 |
| TLA+ | Leslie Lamport『Specifying Systems』Addison-Wesley, 2002 | 📖 ⚠️ 書誌未再確認 |

**Z と VDM は同じ ISO 規格でありながら入手条件が違う。** ISO 規格を一律に扱わない。

**Alloy と TLC は有界である。** 指定した有限の範囲で反例を探すものであり、
反例が無いことは正しさの証明ではない。TLA+ の無限状態に対する証明は TLAPS が担う。

### AI 支援

| 資料 | URL | 確認 |
| --- | --- | --- |
| GitHub Spec Kit | <https://github.com/github/spec-kit> | ✅ 2026-09-17 |

**2025年以降の語であり、ツールも語義も短期間で変わる。** 確認日を必ず添える。
添えられないものは登録しない。

「AI 駆動開発」は市場用語であり、定義が定まっていない。⚠️

---

## 50-individual

### PSP

| 資料 | 書誌 / URL | 確認 |
| --- | --- | --- |
| Watts S. Humphrey『A Discipline for Software Engineering』Addison-Wesley, 1995 | 原典 | 📖 ⚠️ 書誌未再確認 |
| Watts S. Humphrey『PSP: A Self-Improvement Process for Software Engineers』Addison-Wesley, 2005 | — | 📖 ⚠️ 書誌未再確認 |
| Process Dashboard（PSP を実装したツール） | <https://github.com/dtuma/processdash> | ✅ 2026-08-10 |
| Process Dashboard 公式サイト | <https://www.processdash.com/> | ✅ 2026-08-10 |

**PSP は本リポジトリで最も制約が強い対象である。**

- PSP は CMU のサービスマークである
- Process Dashboard 同梱のスクリプトとフォームは**個人利用限定の特別許諾**であり、
  **派生や改変には SEI の書面許可が必要**である
- 2018年に CC BY 4.0 で公開された教材があるとされるが、**本リポジトリでは未確認** ⚠️
- **スクリプトとフォームの様式そのものが許諾の対象である。** 項目名の列挙も翻案にあたりうる

参照する際は、**どの版の教材かを必ず記録すること。**

### テスト駆動開発

| 資料 | 書誌 | 確認 |
| --- | --- | --- |
| Kent Beck『Test-Driven Development: By Example』Addison-Wesley, 2003 | — | 📖 ⚠️ 書誌未再確認 |

---

## 確認が必要なもの

⚠️ が付いた項目を、登録の前に確認する。**確認できないものは `status: referenced-only` から
動かさず、`rights.verified` を「未確認」のままにする。**

| 優先度 | 対象 | 確認すること |
| --- | --- | --- |
| 高 | PSP / TSP | 2018年の CC BY 4.0 版の所在と範囲。特別許諾版との違い |
| 高 | ISO/IEC 13568（Z） | ITTF での無償公開の所在 |
| 高 | ISO/IEC 13817-1（VDM） | 入手条件 |
| 中 | Alloy / TLA+ | ツールと資料の配布条件 |
| 中 | People CMM | 技術報告書の配布条件 |
| 中 | 発注者ビューガイドライン | WARP 保存版の到達性 |
| 低 | 書籍の書誌（📖 ⚠️ のもの） | 版、出版年、ISBN |

---

## 参照の原則

姉妹プロジェクトから引き継ぐ。

1. **一次資料に当たる。** 解説記事やブログ記事は参考にとどめ、記法や方針の根拠にしない
2. **著作権に配慮する。** 方法論や構造は採用してよいが、本文の転記と翻案は避ける
3. **リンクはブラウザで確認する。** コマンドラインのツールでは 403 が返る場合がある
4. **URL の陳腐化に備える。** IPA のサイトは改組により URL が変わる

| 資料 | URL | 確認 |
| --- | --- | --- |
| IPA アーカイブ トップ | <https://www.ipa.go.jp/archive/index.html> | ✅ 2026-08-10 |
| システム構築の上流工程強化 | <https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/index.html> | ✅ 2026-08-10 |
