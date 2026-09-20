---
id: MTH-0450
name: Four Activities
name_ja: 4つの作業の区分
kind: guideline
target_phase: [external-design]
origin: both
formality: informal
status: registered
applicable_to_solo: partial
adoption:
  - product: paper-repro
    state: tailored
    scope: 発注者と開発者が同一人物である個人開発での扱いを定めた
    artifacts:
      - docs/arch-guide/arc-screen.md
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

# 4つの作業の区分

合意形成を4つの作業に分ける。**両版にまたがる概念。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| エンタプライズ系事業/機能要件の合意形成技法 | <https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html> | 2026-08-24 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **著作物にあたらない事実として参照できる。** 区分の言及にとどめる
- 姉妹プロジェクト `paper-repro` では、発注者と開発者が同一人物である場合の扱いを定めるのに用いている

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 範囲 |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **テーラリングあり** | **発注者と開発者が同一人物である個人開発での扱いを定めた** |

### 該当する成果物

- [`arc-screen.md 第6章`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/arch-guide/arc-screen.md)

### 前提の読み替え

4つの作業のうち、相手方を要するものを自分の中で完結させている

### 読み替えにより失われるもの

**第三者の視点による確認。自分で書いたものを自分で確認することになる**

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
