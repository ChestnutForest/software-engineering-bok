---
id: MTH-0472
name: VDM
name_ja: ウィーン開発手法
kind: notation
describes: software
target_phase: [requirements, external-design, internal-design]
origin: both
formality: formal
verification:
  method: both
  scope: unbounded
  tools: [Overture, VDMTools]
status: referenced-only
applicable_to_solo: true
relates_to: []
rights:
  holder: ISO / IEC
  redistribution: unknown
  derivation: unknown
  conditions: ISO/IEC 13817-1:1996（VDM-SL 基底言語）。購入が必要と見られる。要確認
  policy: 本文を転記も言い換えもしない
  verified: 未確認
sources:
  - title: ISO/IEC 13817-1:1996。URL 未取得
    verify: manual
    verified: 未確認
---

# ウィーン開発手法

仕様から実装へ段階的に詳細化する形式手法。

## 一次資料

| 資料 | URL | 確認 |
| --- | --- | --- |
| ISO/IEC 13817-1:1996。URL 未取得 | — | 未確認 |

> IPA・AFFORDD・WARP・OMG の各サイトは自動取得を制限している場合がある。
> **ブラウザで開いて確認すること。**

## 記録

- IBM ウィーン研究所で1970年代に始まる
- 実装への段階的詳細化（refinement）を重視する
- **Z と同じ ISO 規格でありながら入手条件が違う。** ISO 規格を一律に扱わない

## 書かないもの

**本文の転記も言い換えもしない。** ここに置くのは、一次資料の所在、
独自に構成した判断軸、使用条件の3つだけである。

---

この項目はまだ雛形である。`rights.verified` が `未確認` のあいだは
`status` を `referenced-only` から動かさない。
