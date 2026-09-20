---
id: MTH-0323
name: TSP Team Roles
name_ja: チームの役割
kind: process
target_phase: [requirements, external-design, internal-design, construction, test]
origin: both
formality: informal
status: referenced-only
applicable_to_solo: false
adoption:
  - product: paper-repro
    state: out-of-scope
    reason: チーム開発が前提であり、個人開発では成り立たない
    source: docs/methodology-map.md
    verified: 2026-09-11
relates_to: []
rights:
  inherit: ./README.md
sources:
  - url: https://www.sei.cmu.edu/
    title: SEI（カーネギーメロン大学）
    verify: manual
    verified: 2026-09-17
---

# チームの役割

チームリーダーと役割マネージャで責任を分ける。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| SEI（カーネギーメロン大学） | <https://www.sei.cmu.edu/> | 2026-09-17 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- 個人には役割分担が無いため、PSP に対応するものが無い
- 未確認

## 採用の記録

枠組みは [`docs/conventions/adoption-record.md`](../../docs/conventions/adoption-record.md) が定める。

| プロダクト | 状態 | 扱い |
| --- | --- | --- |
| [paper-repro](https://github.com/ChestnutForest/paper-repro) | **対象外** | チーム開発が前提であり、個人開発では成り立たない |

### 理由

チーム開発が前提であり、個人開発では成り立たない

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
