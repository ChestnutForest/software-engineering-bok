# 40-software — ソフトウェアそのものを対象とするもの

## 置くもの

| 範囲 | 内容 |
| --- | --- |
| [SWEBOK](swebok.md) | 知識体系。リポジトリ名の由来 |
| [requirements/](requirements/) | 要求を記述する |
| [design/](design/) | 設計する。合意形成の指針を含む |
| [notations/](notations/) | 記述の書き方 |
| [formal-methods/](formal-methods/) | 数学的な意味論を持つ記述 |
| [ai-assisted/](ai-assisted/) | AI を用いる進め方 |

## 工程でディレクトリを切らない

`requirements/` と `design/` は工程の名前を持つが、**工程はディレクトリではなく
Front Matter の `target_phase` が表す。** 複数工程にまたがるものがあるためである。

ディレクトリ名だけに頼ると、対象工程を取り違える。実際に、機能要件の合意形成ガイドを
`requirements/` に置く誤りが一度起きた（対象工程は外部設計工程である）。

## 注意

この階層の大半は上流工程に属する。存否は ADR-0002 の未決事項1（上流工程を含むか）に依存する。
