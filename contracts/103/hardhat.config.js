/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    sources: 'src',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
 
};
