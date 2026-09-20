---
id: MTH-0301
name: RUP
name_ja: ラショナル統一プロセス
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: greenfield
formality: informal
status: referenced-only
applicable_to_solo: false
adoption:
  - product: paper-repro
    state: out-of-scope
    reason: 反復型のチーム開発プロセスであり、役割分担を前提とする
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to:
  - id: MTH-0311
    relation: describable-by
    note: SPEM で記述できる。SPEM から生まれたのではない
rights:
  holder: IBM
  redistribution: prohibited
  derivation: prohibited
  conditions: proprietary な成果物であり、教材の再配布はできない
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: Philippe Kruchten『The Rational Unified Process: An Introduction』Addison-Wesley（第3版 2003）。書誌未再確認
    verify: manual
    verified: 未確認
---

# ラショナル統一プロセス

反復型のプロセスフレームワーク。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| Philippe Kruchten『The Rational Unified Process: An Introduction』Addison-Wesley（第3版 2003）。書誌未再確認 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- **現在は活発に更新されていない。** 事実上のレガシーである
- **RUP は SPEM より先に存在する。** RUP は1998年ごろ確立、SPEM 1.0 は2001年11月採択
- SPEM 1.0 は、RUP のように UML の使用を伴うプロセスを記述できるように作られた

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **対象外** | 反復型のチーム開発プロセスであり、役割分担を前提とする |

### 理由

反復型のチーム開発プロセスであり、役割分担を前提とする

### 出所

[`methodology-map.md`](https://github.com/ChestnutForest/paper-repro/blob/main/docs/methodology-map.md) 第3.1節。2026年9月11日の走査による。
**本エントリは採否を決める文書ではない。** 採否を変えるときは `paper-repro` 側の
根拠のある文書を先に直し、そこから反映する。

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
