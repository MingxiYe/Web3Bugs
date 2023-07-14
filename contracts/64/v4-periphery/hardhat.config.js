/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
        {
            version: '0.8.6',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 2000,
                },
                evmVersion: 'berlin',
            },
        },
        {
            version: '0.7.6',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 2000,
                },
                evmVersion: 'berlin',
            },
        },
    ],
}
};
