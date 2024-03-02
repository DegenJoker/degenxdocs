---
sidebar_class_name: hidden
title: Approval Transaction Issues
description: Troubleshooting transaction issues on Broccoliswap.
---

When you're having trouble with an approval transaction not behaving as anticipated, there are several steps you can undertake to diagnose and resolve the issue:

## Encountering Multiple Approval Requests

Sometimes, tokens may necessitate the cancellation of existing approvals before you can proceed with a new one. If you attempt to approve a token, especially one with non-standard approval mechanisms, without first revoking prior approvals, you might find yourself needing to authorise the token repeatedly.

## How to Address Approval Issues

To navigate through this, begin by revoking the existing approval for the token. For guidance on how to do this, refer to our guide, ["How to Revoke a Token Approval"](011-revoke-token-approval.md)

After revoking the token's approval, go ahead and initiate your swap once more. During this process, you'll be prompted to approve the token again, including setting a new spending limit.

Following these steps correctly should open the way for a successful approval, enabling you to complete your swap. 

For further details on how to manage approval transactions effectively, check out our guide, ["What is an Approval Transaction?"](010-approval-tx.md)

:::note
Keep in mind that this problem isn't exclusive to tokens with unconventional approval processes. If you encounter such an issue, revoking and subsequently re-approving the token is a recommended troubleshooting step.
:::



## Not seeing signature approval requests

If you're not seeing signature or approval requests from BroccoliSwap in your wallet, several factors might be at play. Here's how to troubleshoot the issue:

### Wallet Compatibility Issues

BroccoliSwap may not work well with smart contract wallets. If you're using such a wallet, this might be why you're not getting transaction confirmation prompts.

### Wallet Connect Steps

- Try disconnecting and reconnecting your wallet to BroccoliSwap.
- Make sure your wallet app ( MetaMask, SafePal or Ledger) is up to date.
- Consider switching to a different wallet app if problems persist.

### Web Browser Solutions

- Clear cookies and cache for https://broccoliswap.com specifically.
- Attempt the operation using a different web browser.
- If using a desktop, perform a hard refresh:
- For PCs: Press Control + Shift + R.
- For Macs: Press Command + Shift + R.
- For Mobile: Follow instructions from your specific browser provider.

### Network Solutions

Switch to a different network from the network selection dropdown, then revert to your original network.

### Approving Transaction Amounts

If you've already approved a specific amount, try executing a transaction for a slightly lower amount. For instance, if you've approved 1,000 USDT, consider swapping 995 USDT instead. You can verify the approved amount on on a blockchain explorer like etherscan.io.

<br/>

## Setting Correct Approval Amount

Setting the right approval amount for token transactions allows you to manage your tokens wisely while minimizing unnecessary network fees. Let's delve into the different approval amount options and what they entail.

### Exact Amount Approval

This option lets you approve the precise amount a contract can use. For instance, if you're swapping 500 UNI for ETH, you approve exactly 500 UNI. This method is highly secure as it restricts access strictly to the amount specified. However, it means you'll need a new approval for each transaction, potentially leading to higher cumulative network fees.

### Unlimited Approval

Opting for unlimited approval grants a contract access to as much of a specific token in your wallet as needed, minimising the need for repeated approvals. While this is convenient, it poses a security risk by potentially allowing unfettered access to your tokens. Always ensure the platform and contract you're interacting with are trustworthy and verify the URL and contract authenticity. Contact support if you're unsure about a Uniswap contract's legitimacy.

### Balanced Approval

A balanced approval strikes a middle ground by authorising more tokens than the immediate transaction requires, but not an unlimited quantity.

### Tips for Setting Approval Amounts

**Prioritise Security:** Use unlimited approvals only with platforms you trust.

**Assess Usage Frequency:** If you're likely to interact with a dApp only once, exact amount approval is best. For regular interactions, balanced or unlimited approvals could be more convenient, but weigh the security risks.

**Regularly Review Approvals:** Use tools like Etherscan's Token Approval Checker to periodically audit and adjust your approvals.

**Consider Network Fees:** Each approval or revocation incurs network fees. Factor this into your decision-making, especially for multiple transactions.

In summary, the ideal approval amount depends on your specific needs, security considerations, and the trustworthiness of the dApps you use. Actively manage your approvals to maintain a balance between convenience and the security of your assets.


**[Back to "BroccoliSwap Help"](/docs/090-Help-Centre/020-Broccoliswap/001-Index.md)**
