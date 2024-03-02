---
id: change-tokenomics-proposal
title: Change Tokenomics
sidebar_position: 30
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

## Propose Tokenomics Change

:::info
This area will help you to understand what tokenomics can be changed and the impact it would have.
:::

### Contract Functions

A proposal can include changes to various DGNX tokenomics, such as the following fuctions in the DGNXControllerV2 Contract: [0x223b26cc3d0154ee9b625e94eb194940a8ca3867](https://snowtrace.io/address/0x223b26cc3d0154ee9b625e94eb194940a8ca3867)

|Function                | Use                             | Current Value | Current % |
|------------------------|---------------------------------|--------------:|----------:|
| setBackingTax          |   Change to Liquidity Backing tax. This tax is sent to [0x31...5202](https://snowtrace.io/address/0x31CE1540414361cFf99e83a05e4ad6d35D425202) address. This is a tax on buys/sells of DGNX. | 10 | 0.1 |   
| setBurnTax             |   Change to Burn tax. This tax is sent to [0x00...dEaD](https://snowtrace.io/address/0x000000000000000000000000000000000000dEaD/tokentxns?tokenAddresses=0x51e48670098173025C477D9AA3f0efF7BF9f7812) address. This is a tax on sells of DGNX. | 10 | 0.1 |
| SetInvestmentFundTax   |   Change to Investment Fund tax. This tax is sent to [0x82...DAe8](https://snowtrace.io/address/0x829619513F202e1bFD8929f656EF96bac73BDAe8) address. This is a tax on buys/sells of DGNX. | 0 | 0 |
| setLiquidityTax        |   Change to Liquidity Booster tax. This tax is currently sent to [TraderJoe DGNX/WAVAX LP](https://snowtrace.io/address/0xbcaBb94006400eD84c3699728d6ecbAa06665c89). This is a tax on buys/sells of DGNX. | 0 | 0 |
| setMarketingTax        |   Change to Marketing tax. This tax is sent to [0x16...4643](https://snowtrace.io/address/0x16eF18E42A7d72E52E9B213D7eABA269B90A4643) address. This is a tax on buys of DGNX. | 10 | 0.1 |
| setPlatformTax         |   Change to Platform Development tax. This tax is sent to [0xcA...1B10](https://snowtrace.io/address/0xcA01A9d36F47561F03226B6b697B14B9274b1B10) address. This is a tax on buys/sells of DGNX | 10 | 0.1 |


#### Value Ranges: 

When specifying new values, ensure they are within the allowed range (0-500, with 500 representing a 5% tax). This applies to all tax-related functions mentioned.

## Examples

Function to change Marketing tax to 3%
```Markdown
Signature:
setMarketingTax (unit256)

Calldatas:
unit256: 300

Target:
0x223b26cc3d0154ee9b625e94eb194940a8ca3867

Value: 
0
```
Function to change Platform tax to 1%
```Markdown
Signature:
setPlatformTax (unit256)

Calldatas:
unit256: 100

Target:
0x223b26cc3d0154ee9b625e94eb194940a8ca3867

Value: 
0
```

:::info
In each of the examples shown and for all tokenomics changes the target contract should be the DGNXv2Controller - 0x223b26cc3d0154ee9b625e94eb194940a8ca3867
:::
