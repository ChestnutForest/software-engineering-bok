---
id: MTH-0441
name: IPA Agreement Guide for Functional Requirements
name_ja: 機能要件の合意形成ガイド
kind: guideline
group: true
target_phase: [external-design]
origin: both
formality: informal
status: referenced-only
applicable_to_solo: partial
relates_to:
  - id: MTH-0461
    relation: succeeds
    note: 技術領域が3つから6つへ拡張された
rights:
  holder: 独立行政法人情報処理推進機構（IPA）
  redistribution: permitted
  derivation: prohibited
  attribution: 機能要件の合意形成ガイド ver.1.0、Copyright©2010 IPA
  conditions: 著作権表示を明記し、情報システム開発に携わる者が本目的のために行う場合に限る
  policy: 本文を転記も言い換えもしない
  verified: 2026-09-18
sources:
  - url: https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html
    title: エンタプライズ系事業/機能要件の合意形成技法
    verify: manual
    verified: 2026-08-24
  - url: https://www.ipa.go.jp/archive/files/000028868.ppt
    title: 「機能要件の合意形成ガイド」説明資料（PowerPoint、2011年6月）
    verify: manual
    verified: 2026-08-10
---

# 機能要件の合意形成ガイド

発注者と開発者の合意形成のコツを集めたガイド。**対象工程は外部設計工程。**

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| エンタプライズ系事業/機能要件の合意形成技法 | <https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/ent03-a.html> | 2026-08-24 |
| 「機能要件の合意形成ガイド」説明資料（PowerPoint、2011年6月） | <https://www.ipa.go.jp/archive/files/000028868.ppt> | 2026-08-10 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 策定は IPA/SEC 機能要件の合意形成技法ワーキンググループ。事業は2008〜2009年度
- **対象工程は外部設計工程である。要件定義ではない**
- **構成は概要編＋6技術領域の全7編。概要編は技術領域ではない**
- 想定規模は300FP以上、5000万円以上、10名以上、50人月以上
- ガイド自身が、小規模でも書き方とレビューのコツを参考にしてほしいと述べている
- 発注者と開発者が別であることを前提とする。個人開発では読み替えが要る
- **複製・再配布は許されている。禁じられているのは改変・翻案である**

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
