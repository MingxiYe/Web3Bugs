/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          evmVersion: "istanbul",
          optimizer: { enabled: true, runs: 200 },
        },
      },
      {
        version: "0.8.2",
        settings: {
          evmVersion: "istanbul",
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },
};
