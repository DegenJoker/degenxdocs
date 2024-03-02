---
sidebar_position: 30
title: Extend Liquidity Backing
description: Learn how a DGNX holder can propose change to assets stored within Liquidity Backing.
image: /img/social-card-dao-liquidity-backing.png
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

## Integrating New Tokens

Our Liquidity Backing (LB) feature supports the addition of various tokens. By default, it utilizes trading pairs with (W)AVAX on **[traderjoe.xyz](https://traderjoe.xyz)** and **[pangolin.exchange](https://pangolin.exchange/)**. These DEXs facilitate the swapping of deposited tokens to a chosen payout token. To integrate a new token, you'll need the addresses for both a valid Vault **`_vault`** and a Strategy **`_strategy`** .

### Required Addresses

#### To add a token to Liquidity Backing, interact with the LB smart contract at:

LB Smart Contract Address: **`0x62320b483C422112DE64f3F621A3f57B993029C9`** ([View on snowtrace.io](https://snowtrace.io/address/0x62320b483C422112DE64f3F621A3f57B993029C9)) 

#### For storing new tokens, utilizing an existing Vault is recommended:

Existing Vault Address: **`0x878a903310298c73182A91C988b5e8b26A59131A`** ([View on snowtrace.io](https://snowtrace.io/address/0x878a903310298c73182A91C988b5e8b26A59131A)) 

#### When adding a token paired with (W)AVAX, a new Strategy isn't necessary. Use the following address:

Recommended Strategy Address: **`0x5947D33Eb4bfBAa155193a91fd6639040631C2A1`** ([View on snowtrace.io](https://snowtrace.io/address/0x5947D33Eb4bfBAa155193a91fd6639040631C2A1))  

Next, select the token **`_token`** you wish to add.

### Smart Contract Functionality

Here's how the function  looks within the LB smart contract

```jsx
/**
 * Adds a token which can be deposited
 * @param _token address of the token
 * @param _vault address of the vault the token should be stored in
 * @param _strategy address of the strategy that should be applied to the token
 * @dev this method checks if there is already a token, so it couldn't be added twice.
 * It checks if the given vault address is already existing, so it can register the token.
 * It checks if the given strategy is already existing, so it can check if the strategy is
 * the right strategy to be applied to this token, so it will check its existency of a swap
 * possibility. If it can be swapped, it will assign the strategy to the token and sets the
 * allowance to MAX_INT. The token is enabled by default.
 * It is gate kept by the ROLE_DEPOSITER to be deposited, so no worries here to open things
 * up which shouldn't.
 */
function addToken(
    address _token,
    address _vault,
    address _strategy
) external onlyRole(ROLE_GOVERNANCE) {
    if (_token == address(0)) revert Controller_AddressZero();
    if (depositTokens[_token].isToken) revert Controller_TokenAlreadyExists();
    if (!addressCheck[_vault].isVault) revert Controller_VaultNotValid();
    if (!addressCheck[_strategy].isStrategy) revert Controller_StrategyNotValid();

    IStrategy strategy = IStrategy(_strategy);
    if (!strategy.check(_token)) revert Controller_StrategyNotValidForToken();
    if (!checkStrategyValidityByPullToken(strategy.pullToken())) revert Controller_MissingSwapper();

    {
        // assign vault to token and register asset
        depositTokens[_token].vault = IVault(_vault);
        depositTokens[_token].vault.registerAsset(_token);
        IERC20(_token).approve(_vault, MAX_INT);
        emit AssignedTokenVault(_token, _vault);
    }

    {
        // assign strategy to token
        depositTokens[_token].strategy = strategy;
        IERC20(_token).approve(_strategy, MAX_INT);
        emit AssignedTokenStrategy(_token, _strategy);
    }

    depositTokens[_token].isToken = true;
    depositTokens[_token].enabled = true;
    allTokens.push(_token);

    emit TokenAdded(_token, _vault, _strategy);
}
```

### Contract ABI for Integration

To call the function on the LB smart contract, use this ABI specification:

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_vault",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_strategy",
        "type": "address"
      }
    ],
    "name": "addToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

### Simulation via Tenderly

Before executing, it's wise to simulate the interaction with the smart contract through Tenderly. This helps verify the token's eligibility for addition. Use the TimelockController address.
TimelockController Address: **`0xC07017739f09778ccea0468dA7b8381f1967Eb95`** ([View on snowtrace.io](https://snowtrace.io/address/0xC07017739f09778ccea0468dA7b8381f1967Eb95)) for the simulation, as it represents the sender for DAO proposal executions.

