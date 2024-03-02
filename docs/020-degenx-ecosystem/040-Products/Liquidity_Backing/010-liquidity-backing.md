---
id: liquidity_backing
sidebar_position: 10
---
import ThemedImage from '@theme/ThemedImage';


# Products

  <ThemedImage
  alt="Liquidity Backing Logo"
  className="vertical-timeline-element-title-img"
  sources={{
    light: ('/img/light_liqback.svg'),
    dark: ('/img/dark_liqback.svg')
  }}
/>

## Introduction

DegenX (DGNX) has introduced a pioneering Liquidity Backing feature, setting a foundational value for the DGNX token by establishing a growing pool of assets. This mechanism allows DGNX holders to unlock their share of Liquidity Backing assets by choosing to burn their tokens through a bespoke interface within the DegenX Dapp. Access to the assets in Liquidity Backing is exclusively through the burning of DGNX tokens.

This guide aims to reveal the Liquidity Backing concept, using straightforward examples to illustrate its workings and the potential impact of asset value increases within this pool. We'll also delve into how DGNX holders can influence the selection of backing assets and modify the token's taxes via on-chain DAO proposals.


## How It Functions

With every DGNX transaction (buy or sell), a small fraction (0.1%) is directed to the Liquidity Backing pool. This pool is also set to benefit from various revenue streams in the future, guaranteeing steady growth. Burning DGNX tokens grants you access to your share of the pool, which is calculated based on the proportion of DGNX you hold. This action does not dilute the share of other holders but rather accelerates the growth of their pool share as the circulating supply of DGNX decreases.


## Community Empowerment

The power to shape the DegenX ecosystem lies firmly in the hands of its community. Through on-chain DAO (Decentralised Autonomous Organisation) proposals, DGNX holders actively participate in pivotal decisions, such as the selection of Liquidity Backing assets and the adjustment of token taxes. Initially set at 4% and now refined to 0.1%, these token taxes are a testament to the dynamic and responsive governance model that DegenX champions.


## Deciding on Backing Assets

The DGNX community doesn't just have a say; it has the final word on which assets back their token. This decision-making extends beyond asset selection; it involves strategic thinking about the exposure and risk levels of potential backing assets. For instance, stablecoins like USDT offer a lower-risk option, providing stability and predictability to the Liquidity Backing pool. On the other end of the spectrum, micro-cap tokens present an opportunity for higher volatility and the potential for rapid gains, albeit with increased risk.


## Adaptive Strategy for Changing Market Conditions

The Liquidity Backing pool's composition is not static. It reflects the community's strategic choices in response to evolving market conditions. By incorporating multiple tokens, the DGNX DAO empowers its community to safeguard their investment through diversified exposure. This approach not only mitigates risks associated with market fluctuations but also capitalises on opportunities for growth, ensuring the pool's resilience and the token's stability. DGNX holders have full control over their investment.
Arbitrage Opportunities
Liquidity Backing creates potential arbitrage opportunities. Should the Liquidity Backing value surpass the market price of DGNX, holders could profit by burning their tokens for their asset share and repurchasing DGNX at market price, thus increasing their token quantity.

## Working Example  
*Figures below are provided for illustrative purposes only.

### Static figures 


| Your DGNX balance       |     DGNX price | DGNX value in $ | DGNX Circ. Supply   |
|------------------------:|---------------:|----------------:|--------------------:|
|**21,000 DGNX** _(0.1%)_ | **$0.32**      | **$6,720**      | **21,000,000**      |



### Your LB share

| LB Asset      |     $/Asset | Asset Pool Amount | Total $ Value | $ LB Share | $ DGNX      |
| ------------- | ----------: | ----------------: | ------------: | ---------: | ----------: |
| BTC.b         | **$28,000** |                50 |    $1,400,000 |     $1,400 |       -     |
| WETH.e        |  **$1,800** |               500 |      $900,000 |       $900 |       -     |
| USDC.e        |          $1 |         2,500,000 |    $2,500,000 |     $2,500 |       -     |
|               |             |                   |               | **$4,800** | **$6,720**  |

### Your LB share with an increase in $ value of LB assets

| LB Asset      |     $/Asset | Asset Pool Amount | Total $ Value | $ LB Share | $ DGNX      |
| ------------- | ----------: | ----------------: | ------------: | ---------: | ----------: |
| BTC.b         | **$80,000** |                50 |    $4,000,000 |     $4,000 |       -     |
| WETH.e        |  **$6,000** |               500 |    $3,000,000 |     $3,000 |       -     |
| USDC.e        |          $1 |         2,500,000 |    $2,500,000 |     $2,500 |       -     |
|               |             |                   |               | **$9,500** | **$6,720**  |

### Summary

With the increase in asset values, your share in the Liquidity Backing pool increased from $4,800 to $9,500. This means that the minimum value of your 21,000 DGNX tokens has increased from $4,800 to $9,500, reflecting the appreciation of the backing assets. If the market value of your 21,000 DGNX is $6,720 at 0.32 USD per $DGNX, then you now have the potential for arbitrage opportunities between the market price and the Liquidity Backing value.

## Conclusion
DegenX's Liquidity Backing adds an extra layer of value and security to the DGNX token, ensuring a continuously growing pool of assets and presenting arbitrage opportunities for the astute investor. The control over backing assets and tax adjustments lies with the DGNX community, making the ecosystem transparent and decentralised.


## Additional Links

Current Liquidity Backing assets and other key information can be found on our **[DEGENX dApp](https://dgnx.finance/dapp/liquidity-backing)**
