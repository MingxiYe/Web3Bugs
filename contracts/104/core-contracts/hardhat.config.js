/* eslint-disable node/no-unsupported-features/es-syntax */
require('dotenv').config();

require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('solidity-coverage');

module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  }
};
