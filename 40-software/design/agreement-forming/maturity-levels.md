---
id: MTH-0449
name: Agreement Maturity Levels
name_ja: 合意成熟度の3レベル
kind: guideline
target_phase: [external-design]
origin: both
formality: informal
status: registered
applicable_to_solo: partial
adoption:
  - product: paper-repro
    state: tailored
    scope: 仕掛・充実・完成を、トレーサビリティ・マトリクスの工程へ読み替えた
    artifacts:
      - docs/arch-guide/arc-screen.md
      - docs/arch-guide/arc-datamodel-framework.md
      - docs/arch-guide/arc-behavior.md
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0441
    relation: contained-by
    note: ガイドが定める概念
rights:
  inherit: ./README.md
sources:
  - url: https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html
    title: エンタプライズ系事業/機能要件の合意形成技法
    verify: manual
    verified: 2026-08-24
---

# 合意成熟度の3レベル

合意の成熟度を3段階で表す。**両版にまたがる概念。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| エンタプライズ系事業/機能要件の合意形成技法 | <https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html> | 2026-08-24 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 仕掛・充実・完成の3レベル
- **著作物にあたらない事実として参照できる。** レベル名の言及にとどめる
- 姉妹プロジェクト `paper-repro` では、トレーサビリティ・マトリクスの工程へ読み替えて用いている

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **テーラリングあり** | **仕掛・充実・完成を、トレーサビリティ・マトリクスの工程へ読み替えた** |

### 該当する成果物

- [`arc-screen.md 第5章`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-screen.md)
- [`arc-datamodel-framework.md 第5章`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-datamodel-framework.md)
- [`arc-behavior.md 第5章`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-behavior.md)

### 前提の読み替え

発注者と開発者の合意の度合いを表す尺度を、工程の進み具合を表す尺度として使っている

### 読み替えにより失われるもの

**合意形成の度合いという本来の意味。個人開発では合意する相手がいない**

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第1節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
