require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
      },
      {
        version: "0.5.1",
        settings: {},
      },
    ],
  },
  networks: {
    hyperspace: {
    // url: "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1",
    url: "https://rpc.ankr.com/filecoin_testnet",
    accounts: ['193af8516cdfdaaa1ea461e4dac75bd0078fb13bb9e4c0d41cfdb7df76e1b03f'],
  },
}
};