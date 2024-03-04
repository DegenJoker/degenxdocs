---
id: create-proposal
title: Proposals
description: Learn how to create a proposal for DEGENX DAO.
image: /img/social-card-dao-create-proposal.png
sidebar_position: 20
---
import ThemedImage from '@theme/ThemedImage';

# Governance

<ThemedImage
  alt="DEGENX DAO Logo"
  className="vertical-timeline-element-title-img"
  sources={{
    light: ('/img/light_dao.svg'),
    dark: ('/img/dark_dao.svg')
  }}
/>

## Accessing Tally for DEGENX DAO

Participating in the governance of DEGENX DAO involves a series of steps that enable token holders to propose changes to the operational contracts of the DAO. This process is facilitated through Tally, a platform that supports DAO governance by allowing users to create and vote on proposals.

#### Navigate to the DEGENX Governance Page on Tally:

- Visit the specified Tally URL dedicated to the DEGENX ecosystem governance.
- https://www.tally.xyz/gov/degenx-ecosystem 

#### Connect Your Wallet: 

- Click on “Connect your wallet” to link your digital wallet and delegate your tokens (voting power) to yourself. (You should connect to the wallet that holds your DGNX)

- Voting power can also be delegated to a different wallet that you own, or someone you trust to vote and propose on your behalf owns.

:::info
Delegating your tokens is important as it verifies your token holdings and grants you access to participate in governance activities.
:::

## Creating a New Proposal

Here's the simplified guide with a numbered layout for engaging with the DEGENX Governance Page on Tally:

1. **Navigate to the Governance Page:**
   - Go to the Tally website and access the DEGENX Ecosystem governance section at [https://www.tally.xyz/gov/degenx-ecosystem](https://www.tally.xyz/gov/degenx-ecosystem).

2. **Connect Your Wallet:**
   - Click on "Connect your wallet" to link the digital wallet that holds your DGNX tokens. This action allows you to delegate your voting power either to yourself, another wallet you own, or to someone you trust.

3. **Creating a New Proposal:**
   - **Initiate the Proposal:** Click on the “Create new proposal” button to start the proposal process.
   - **Proposal Content:** Enter a clear title and detailed description of your proposal. Use the ‘preview’ function to check how it will appear and click "continue" when ready.
   - **Selecting a Contract:** Opt for “Custom action” to specify the contract you aim to adjust. Refer to the DGNX Gitbook for the contract address, such as the Controller v2 contract to modify the marketing tax.
   - **Function Selection:** Enter the desired contract address, select the function you want to change (e.g., setMarketingTax), input the new value (e.g., 300 for a 3% tax), and click “continue.”  


   :::info
   If Tally doesn't automatically recognise the required contract, visit a blockchain explorer (e.g. SnowTrace) to obtain the contract's ABI. This can then be uploaded to Tally to facilitate the proposal creation.
   :::

4. **Finalising the Proposal:**
   - **Reviewing the Proposal:** Carefully review your proposal details and simulate its execution to ensure it functions as expected.
   - **Submitting the Proposal:** If the simulation results are satisfactory, submit your proposal on-chain to enable voting by the DAO members.

This guide simplifies the steps to actively participate in the governance of the DEGENX ecosystem, ensuring that even newcomers can understand and engage with the process effectively.

## Proposal Templates

```Markdown
# One line description that will be used as headline

## Description

Your description here...

## Proposal Summary

Your proposal summary here...
```

## Additional Links


