# Metamask Checker &mdash; Core

[![License](https://img.shields.io/badge/License-MIT-000000.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/LordotU/metamask-checker.svg?branch=master)](https://travis-ci.org/LordotU/metamask-checker)
[![Coverage Status](https://coveralls.io/repos/github/LordotU/metamask-checker/badge.svg)](https://coveralls.io/github/LordotU/metamask-checker)

## Description

Core part of the [react-metamask-checker](https://github.com/LordotU/react-metamask-checker) and [vue-metamask-checker](https://github.com/LordotU/vue-metamask-checker) components.

**Note**: only new version of Metamask API is supported. Related links:
  * https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a
  * https://metamask.github.io/metamask-docs/API_Reference/Ethereum_Provider#new-api

## Installation

```bash
yarn add @metamask-checker/core

# or

npm install --save @metamask-checker/core
```

## Testing

```bash
yarn test:jest # Runs Jest with coverage collection
yarn test:coverage # Sends coverage to .coveralls.io
yarn test # yarn test:jest && yarn test:coverage

# or

npm run test:jest
npm run test:coverage
npm test
```

## Usage

```javascript
import checkMetamask from '@metamask-checker/core'

(async () => {
  try {

    const { selectedNetwork, selectedAccount } = await checkMetamask(
      window.ethereum,
      // networkId or chainId decimal number value,
      // account address string value,
    )

    // ...code

  } catch (error) {
    console.error(error)
  }
})()
```
