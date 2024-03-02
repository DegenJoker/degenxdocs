---
sidebar_class_name: hidden
title: How are token prices determined?
description: A comprehensive guide about token prices.
image: /img/social-card-hc-bswap.png
---

The price of tokens is influenced by the balance of each token within a liquidity pool, governed by the formula 
(x *times* y = k), where \(x\) and \(y\) represent different tokens and \(k\) is a constant.

In a trade, swapping a quantity of one token (\(x\)) for another (\(y\)) alters the pool's balance. To keep the constant (\(k\)) unchanged, the smart contract adjusts the holdings, which in turn affects the token prices.

BroccoliSwap operates by sourcing liquidity from a variety of tokens, DEXs (Decentralised Exchanges), and bridges rather than holding liquidity itself. It optimises your trading route by comparing different offerings.


**[Back to "BroccoliSwap Help"](/docs/090-Help-Centre/020-Broccoliswap/001-Index.md)**
