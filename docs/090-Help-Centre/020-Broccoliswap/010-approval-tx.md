---
sidebar_class_name: hidden
title: What is an Approval Transaction?
description: A comprehensive guide about approval transactions.
image: /img/social-card-hc-bswap.png

---
In the world of BroccoliSwap, and indeed across most platforms dealing with ERC20 tokens on the Ethereum network, you're required to authorize a smart contract to manage the tokens on your behalf. This permission is granted through what's known as an "approve transaction." You need to do this once for each ERC20 token you wish to swap.

Before you can swap for the first time, you'll need to perform an approval transaction. This process authorises BroccoliSwap to access and swap the specific token from your wallet.

**Example of an approval transaction when using BroccoliSwap:**

1. Input the details of your swap.
2. Click on "swap".
3. Within your wallet, authorise BroccoliSwap to use the token you're exchanging. This step incurs network fees (also known as gas fees).
4. Your wallet might ask you to specify the amount of tokens you’re approving for the swap. Ensure this amount is at least equal to what you're swapping.
5. Next, permit the use of the token for swapping, incurring additional network fees. (This step involves a Permit2 signature.)
6. Confirm the swap in your wallet, which also requires network fees.
7. Once you confirm, the swap is processed on the blockchain as pending.
8. A "Swap success" notification appears once the transaction completes successfully.


For each new token you wish to trade on BroccoliSwap, an individual approval transaction is necessary.
If you encounter any difficulties with token approval, check out our ["Approval Transaction Troubleshooting"](031-approval-tx-issue.md) guide.


**[Back to "BroccoliSwap Help"](/docs/090-Help-Centre/020-Broccoliswap/001-Index.md)**
