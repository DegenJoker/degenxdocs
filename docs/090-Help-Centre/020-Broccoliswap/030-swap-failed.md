---
sidebar_class_name: hidden
title: Swap Failed
description: Troubleshooting a failed swap on BroccoliSwap.
image: /img/social-card-hc-bswap.png
---

If you encounter a "Swap Failed" error while using BroccoliSwap, several factors could be at play. Here's a breakdown of potential issues and how to address them:

## Variable Token Fees

Some tokens feature fluctuating buy or sell fees. BroccoliSwap incorporates auto-slippage and a token fee calculator to manage this. Ensure the auto-slippage setting, accessible via 'slippage settings' at the swap interface's top right, is properly adjusted. Your swap's slippage should exceed the token's fee. If the fee rises, you might need to manually increase the slippage for your swap. For instance, for a token with a 10% sell fee, consider adjusting the slippage to 11%, 12%, 13%, or even 14%.

## Browser Issues

A simple browser glitch might be causing the problem. Try these steps:
Disconnect and reconnect your wallet.
Clear your browser's cookies and cache for `https://broccoliswap.com` or switch browsers.
Perform a hard refresh: For PCs, press `Control + Shift + R`; for Macs, `Command + Shift + R`; for mobile devices, follow your browser's specific instructions.
Restart your device. If issues persist, proceed to the next potential cause.

## Unsellable Tokens

Beware of tokens designed by malicious creators to block anyone but themselves from swapping. These tokens may be impossible to sell due to restrictions coded into their contracts.

## Non-standard Approval Processes

Some tokens employ unique approval mechanisms. If you're facing issues, try revoking any existing approvals for the problematic token on BroccoliSwap, then attempt your swap again. This step is unnecessary if you have no prior approvals.

## Mathematical Errors

Tokens like rebase tokens or those with fees on transfer can complicate swap calculations due to their internal mathematics altering the expected output. Adjusting your swap to deal with exact amounts or tweaking the number of tokens or ETH you're swapping could help. For example, try swapping an even number of tokens, like 10,000, or for a precise amount of ETH, such as 0.3.

If issues continue, reach out to **[BroccoliSwap Support](https://t.me/broccoliswapsupport)** via Telegram.


**[Back to "BroccoliSwap Help"](/docs/090-Help-Centre/020-Broccoliswap/001-Index.md)**
