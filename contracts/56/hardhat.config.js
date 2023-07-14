require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('solidity-coverage');
require('@nomiclabs/hardhat-vyper');

const ethers = require('ethers');
// Prevents the "Duplicate definition of Transfer" logs when running tests/scripts
ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);

// If not set, we only need to default these with something to get hardhat to run
const kovanRpcUrl = process.env.KOVAN_RPC_URL || 'http://localhost:8545';
const mainnetRpcUrl = process.env.MAINNET_RPC_URL || 'http://localhost:8545';
const kovanPrivateKey = process.env.KOVAN_PRIVATE_KEY || '0x00';
const mainnetPrivateKey = process.env.MAINNET_PRIVATE_KEY || '0x00';
const mainnetAccounts = process.env.FORK ? undefined : [mainnetPrivateKey];
const chainId = process.env.LIVE ? 1 : 31337;

task('contracts', 'Prints the contract addresses for a network').setAction(async () => {
    // eslint-disable-next-line no-undef
    const contracts = await deployments.all();
    for (const contract in contracts) {
        console.log(contract, contracts[contract].address);
    }
});

module.exports = {
    solidity: {
        version: '0.6.12',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    vyper: {
        version: '0.2.8'
    },
    paths: {
        sources: './contracts',
        tests: './test'
    },
    mocha: {
        timeout: 0
    }
};
