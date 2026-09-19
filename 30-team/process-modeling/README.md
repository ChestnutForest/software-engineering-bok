# process-modeling — プロセスを記述する道具

## 置くもの

| 項目 | 種別 | メタレベル |
| --- | --- | --- |
| [SPEM](spem.md) | メタモデル | 記述に使う概念そのものを定める |
| [PFD](pfd.md) | 記法 | 図の描き方を定める |

**メタレベルが1段違う。** SPEM は Role や Task や Work Product といった概念を定め、
PFD は成果物と作業を図でどう描くかを定める。

## プロセスではない

ここにあるものは**プロセスを記述する**ものであって、プロセス**である**わけではない。
UML がソフトウェアを記述する記法であってソフトウェアの作り方ではないのと同じ関係である。

RUP・TSP・XDDP は1つ上の階層に置く。

## 形式手法ではない

SPEM も PFD も `formality: semi-formal` である。

Z 言語や Alloy は数学的な意味論を持ち、機械的な検査ができる。SPEM は MOF に
もとづくメタモデルで構造を定義するものであり、PFD は成果物と作業を矢印で結ぶ図である。
**記述の厳密さと、検証の可能性は別のことである。**

詳しくは [`40-software/formal-methods/README.md`](../../40-software/formal-methods/README.md)
に書いた。

## 命名について

`process-engineering` としない。「Process Engineering」はプロセスを設計し計測し
改善する**活動**を指す語であり、その領域を担うのは CMMI や ISO/IEC 33000 シリーズである
（→ `10-organization/`）。
