---
sidebar_class_name: hidden
title: Why does ETH swap to WETH?
---

Swapping ETH on BroccoliSwap involves converting it to WETH (Wrapped ETH). While you can start and finish your transactions with ETH on BroccoliSwap, the platform wraps all ETH into WETH during the swap process.

The need for wrapping arises because, for tokens to be exchangeable on BroccoliSwap, they must adhere to the ERC-20 standard. Since ETH predates the ERC-20 standard, it doesn't inherently fit into the framework required for direct swaps.

WETH, or Wrapped ETH, is an ERC-20 compliant version of ETH, designed to bridge this compatibility gap. It enables ETH to be swapped with other ERC-20 tokens on BroccoliSwap by wrapping ETH into WETH during the transaction process.

:::info
BroccoliSwap will take care of this for you for any token that is not ERC-20 standard.
:::


**[Back to "BroccoliSwap Help"](/docs/090-Help-Centre/020-Broccoliswap/001-Index.md)**
