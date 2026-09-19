# 階層の定義

## 並べている軸

ディレクトリの階層は**「適用範囲と対象」の1軸**で並べている。
**これは唯一の分類ではない。** 残りの軸は Front Matter が持ち、`views/` に一覧を生成する。

| 階層 | 対象 | 例 |
| --- | --- | --- |
| `10-organization/` | 組織が採る枠組み | CMMI、ISO 9001 |
| `20-system/` | システム全体 | SEBoK、SysML、SPLE |
| `30-team/` | チームの進め方 | RUP、TSP、XDDP |
| `40-software/` | ソフトウェアそのもの | USDM、DDD、UML、形式手法 |
| `50-individual/` | 個人の規律 | PSP、TDD |

**連番は10刻みとする。** 階層を挿入しても番号を振り直さずに済む。
**番号は順序であって段階ではない。**

## 工程でディレクトリを切らない

工程は Front Matter の `target_phase` が表す。複数工程にまたがるものがあるためである。

`40-software/requirements/` と `40-software/design/` は工程の名前を持つが、
**判断の根拠は `target_phase` である。** ディレクトリ名だけに頼ると取り違える。

実際に、機能要件の合意形成ガイド（対象工程は外部設計工程）を `requirements/` に
置く誤りが一度起きた。

## ディレクトリにする条件

**葉はファイルを既定とする。** 次の両方を満たすときだけディレクトリにする。

1. **内部構造が公式に定義されている**（3点セット、全7編など）
2. **中身が2件以上ある**

| ディレクトリ | 根拠 |
| --- | --- |
| `30-team/tsp/` | SEI が定義する構造 |
| `30-team/xddp/` | 3点セット |
| `30-team/process-modeling/` | 2件目の登録により昇格 |
| `40-software/design/agreement-forming/` | 系譜でまとめる |
| `agreement-forming/ipa-guide-2010/` | 全7編 |
| `agreement-forming/client-view-2007/` | 4編 |
| `50-individual/psp/` | SEI が定義する構造 |

**中身が1つのディレクトリを作らない。** 階層を1段増やすだけで何も分類しない。

ディレクトリにする場合、`README.md` で内部構造の出典を示す。

## この階層の存否

| 階層 | 依存する未決事項 |
| --- | --- |
| `10-organization/`、`20-system/` | ADR-0002 の未決事項5（ソフトウェア工学以外を含むか） |
| `40-software/requirements/`、`design/`、`formal-methods/` | ADR-0002 の未決事項1（上流工程を含むか） |
