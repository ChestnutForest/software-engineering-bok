---
id: REV-0009
title: リポジトリ横断監査
status: reviewed
date: 2026-09-17
author: Kazuyuki Kuribayashi
related: ADR-0001, REV-0001, REV-0002, REV-0003, REV-0004, REV-0005, REV-0006, REV-0007, REV-0008
---

# REV-0009 リポジトリ横断監査

## 1. 監査の範囲と限界

`github.com/ChestnutForest` の公開情報を確認した。**公開されている範囲のみ**を
対象としており、各リポジトリの全ファイルを読んだわけではない。
未確認の項目は第7章に記す。

アカウントには **7リポジトリ**がある。

| リポジトリ | 公開 | 確認状況 |
| --- | --- | --- |
| `paper-repro` | Public | `docs/references-usdm-ipa.md` を確認 |
| `paper-repro-mvp` | Public | ルートと README を確認 |
| `processloop` | Public | **未確認** |
| `ccar-f-study-skills` | Public | **未確認** |
| `software-engineering-bok` | Public | ルートを確認 |
| `Deepware` | Public | **未確認** |
| `antigravity-sandbox` | Public | **未確認** |
| `ChestnutForest`（プロフィール） | Public | README を確認 |

## 2. 最も重大な発見

### 2.1 同じ説明文を持つリポジトリが2つ存在する

**`paper-repro` と `paper-repro-mvp` は別のリポジトリであり、両方とも公開されている。**

| | `paper-repro` | `paper-repro-mvp` |
| --- | --- | --- |
| リポジトリ ID | 未取得 | 1302517904 |
| コミット数 | 未取得 | 16 |
| 説明文 | A human-in-the-loop tool for reading and reproducing arXiv papers (FastAPI + Next.js), built by applying CCAR-F architecture patterns | **同一** |
| `docs/references-usdm-ipa.md` | **ある** | 見当たらない |
| `docs/requirements-usdm.md` | **ある** | 見当たらない（`docs/requirements.md` はある） |
| `backend/`、`frontend/` | 未確認 | ある |
| Topics | 未確認 | 設定済み（anthropic、arxiv、claude ほか） |

**説明文が完全に一致している。** GitHub 上で見分けがつかない。

### 2.2 影響範囲

この重複は、本リポジトリの文書すべてに影響する。

| 文書 | 参照先 |
| --- | --- |
| ADR-0001 第7章 | `paper-repro/docs/references-usdm-ipa.md` |
| REV-0001 第9章 | 同上 |
| REV-0002 第8章 | 同上 |
| REV-0005 第4.2章 | XDDP の一次資料として同上 |
| REV-0006 第5.3章 | テーラリング事例として同上 |
| REV-0008 第7章 | `references/` への移設候補として同上 |

**9本の文書すべてが `paper-repro` だけを参照している。** もし `paper-repro-mvp` が
現行で `paper-repro` が旧版なら、**全文書の参照先が誤っている**ことになる。

### 2.3 どちらが現行かの推定

観察された事実から推定すると、**`paper-repro` が現行**である可能性が高い。

| 根拠 | 内容 |
| --- | --- |
| USDM 形式の要求仕様 | `paper-repro` にのみ `docs/requirements-usdm.md` がある |
| 一次情報の参照集 | `paper-repro` にのみ `docs/references-usdm-ipa.md` がある |
| プロフィールの表示順 | Popular repositories の2番目に `paper-repro` が出る |

ただし**プロフィール README の Projects 表は `paper-repro-mvp` を指している。**
表示と実態が食い違っている。

**これは推定であり、確認が要る。** 第6章に対応の選択肢を示す。

## 3. `software-engineering-bok` の状態

### 3.1 README が実質的に空である

現在のルートは次のとおり。

```
software-engineering-bok/
├── docs/
├── LICENSE
└── README.md        ← リポジトリ名の見出しのみ
```

コミット数は10（ADR-0001、REV-0001〜0008、初回コミット）。

**README には見出し以外の内容が無い。** しかし過去の検証は、README があることを
前提に決定を積んでいる。

| 決定 | 内容 |
| --- | --- |
| REV-0002 第5.2章 | README の1行目で BoK を展開する。スコープを1文で宣言する。転記・翻案をしない方針を明記する |
| REV-0004 第3.1章 | 並べている軸を README に明示する |
| REV-0004 決定2 | 同上 |

**3つの決定が未実施のまま、8本の検証を積み上げた。** 本書と同時に README を書く。

### 3.2 ライセンスが MIT である

**これは見直しが要る。**

| | MIT License | 本リポジトリの実態 |
| --- | --- | --- |
| 対象 | "the Software" | 文書。ソフトウェアではない |
| 許諾 | 複製、改変、再配布、サブライセンス、販売 | **許諾できる範囲がそもそも限られる** |

REV-0002 と REV-0008 で確認したとおり、本リポジトリが扱う対象には
ISO 規格、CMMI、PSP/TSP、RUP、OMG 仕様書が含まれる。これらの本文を
転記しない方針であっても、**MIT は「この成果物すべてを自由に再配布してよい」と
宣言する。** 引用や図表が1つでも混ざれば、宣言と実態が食い違う。

文書リポジトリで一般的な選択肢は次のとおり。

| 選択肢 | 性質 |
| --- | --- |
| CC BY 4.0 | 表示を条件に再利用を許す。文書向け |
| CC BY-SA 4.0 | 上記に継承条件を加える |
| CC0 | 権利を放棄する |
| MIT のまま | **推奨しない。** 対象が合わない |

**`scripts/generate-views.mjs` を書く予定があるため、コードと文書で
ライセンスを分ける**のが実務的である。ルートを CC BY 4.0 とし、
`scripts/` のみ MIT とする形が候補になる。

これは決定を要する事項であり、**本書では提案にとどめる。** ADR-0003 で決めること。

### 3.3 リポジトリの説明と Topics が未設定である

GitHub の About 欄が「No description, website, or topics provided.」のままである。
`paper-repro-mvp` には説明文と7つの Topics が設定されているため、**運用が揃っていない。**

## 4. プロフィール README（`ChestnutForest/ChestnutForest`）

| # | 指摘 | 内容 |
| --- | --- | --- |
| 1 | **Projects 表が `paper-repro-mvp` を指す** | 第2章のとおり。現行と食い違う可能性がある |
| 2 | **Mermaid 図のノードも `paper-repro-mvp`** | 同上。2箇所を直す必要がある |
| 3 | **`software-engineering-bok` が表に無い** | 7リポジトリのうち表にあるのは5つ |
| 4 | `Deepware` と `antigravity-sandbox` の説明が空欄 | 表に行だけあって中身が無い |
| 5 | Interests に「Software process — PSP/TSP」がある | `processloop` と `software-engineering-bok` の両方に関係する。リンクが無い |

## 5. `paper-repro-mvp` の README に見つかった不整合

| # | 指摘 | 内容 |
| --- | --- | --- |
| 1 | **Python のバージョンが食い違う** | 技術スタック表は「Python 3.13」、必要なものは「Python 3.12 以上」 |
| 2 | 初回セットアップのシェルが混在 | `cp` と `source`（Unix）のブロック内に Windows 用の注記が混ざる |
| 3 | 関連プロジェクトの表に `processloop` と `software-engineering-bok` が無い | `ccar-f-study-skills` のみ |

## 6. 対応の選択肢

第2章の重複について、確認したうえで次のいずれかを採る。

| 選択肢 | 内容 | 向くとき |
| --- | --- | --- |
| **A. 旧版をアーカイブする** | 旧版を GitHub の Archived にし、説明文を「Superseded by 〜」に変える | 移行が済んでいるとき |
| **B. 旧版を削除する** | 旧版を消す | 残す価値が無いとき |
| **C. 役割を分ける** | 説明文と README で役割を書き分ける | 両方を使い続けるとき |

**いずれの場合も、説明文が同一である状態は解消する。** これが最優先である。

選択肢 A を採る場合の手順は第8章に示す。

## 7. 未確認の項目

本監査で確認できなかったもの。必要なら別途確認する。

| 対象 | 確認すべきこと |
| --- | --- |
| `processloop` | 5箇所の README の同期状態、GPLv3 の表示、CMU 特別許諾物の扱い |
| `ccar-f-study-skills` | `questions/` の蓄積状況、README の有無 |
| `Deepware` | 目的、現行かどうか |
| `antigravity-sandbox` | 目的、現行かどうか |
| `paper-repro` | ルートの構成、コミット数、`paper-repro-mvp` との差分 |

**`processloop` は GPLv3 のフォークであり、CMU の特別許諾物を含む。**
本リポジトリで扱う権利の論点と直結するため、次に確認する優先度が高い。

## 8. 本リポジトリへ反映する決定

| # | 決定 |
| --- | --- |
| 1 | **README を書く。** BoK の展開、スコープ、並べている軸、転記・翻案をしない方針を含める |
| 2 | **リポジトリの説明文と Topics を設定する** |
| 3 | **ライセンスを見直す。** MIT は対象が合わない。ADR-0003 で決める |
| 4 | **`paper-repro` と `paper-repro-mvp` のどちらが現行かを確定させる。** 確定するまで、9本の文書の参照先は暫定とする |
| 5 | **確定後、全文書の参照先を一括で確認する。** ADR-0001、REV-0001、REV-0002、REV-0005、REV-0006、REV-0008 が対象 |
| 6 | **プロフィール README を直す。** 参照先2箇所と、`software-engineering-bok` の追加 |

## 9. ADR-0001 の未決事項への影響

| # | 未決事項 | 本監査による変化 |
| --- | --- | --- |
| 1 | 上流工程を含むかどうか | 変化なし。着手の前提条件 |
| 2 | 複数工程にまたがる手法の置き場 | 解消済み |
| 3 | `references-usdm-ipa.md` の移設可否 | **前提が崩れた。** 移設元がどちらのリポジトリかを先に確定させる |
| 4 | 文書の粒度と命名規則 | 変化なし |
| 5 | ソフトウェア工学以外を含むか | 変化なし。着手の前提条件 |
| **6** | **ライセンス** | **新規。** MIT のままにしない |

## 10. 次にやること

1. `paper-repro` と `paper-repro-mvp` のどちらが現行かを確定させる（第6章）
2. ADR-0002 でスコープを決める（未決事項1と5。**6回先送りしている**）
3. ADR-0003 でライセンスを決める（未決事項6）
4. プロフィール README を直す（第4章）
5. `processloop` を確認する（第7章）

**構成の検証は8本で出尽くした。ここから先は決定を下す段階である。**
