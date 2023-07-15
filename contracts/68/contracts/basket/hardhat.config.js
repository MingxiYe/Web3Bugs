/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.5",
    settings: {
      optimizer: {
        // Factory goes above contract size limit
        enabled: true,
        runs: 200,
      },
    },
  },
};
