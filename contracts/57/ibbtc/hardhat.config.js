require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-web3')
require('solidity-coverage')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-spdx-license-identifier')

const PRIVATE_KEY = `0x${process.env.PRIVATE_KEY || 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'}`

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: '0.6.11',
    },
    mocha: {
        timeout: 0
    },
    spdxLicenseIdentifier: {
        runOnCompile: true
    }
}
