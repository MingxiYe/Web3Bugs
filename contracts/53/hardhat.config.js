/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
        optimizer: {
            enabled: true,
            runs: 5000,
        },
        outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
        },
    },
},
};
