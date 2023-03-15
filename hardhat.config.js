require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const projectId = "95b5b9a081d94021a5028b149874b1ef"


module.exports = {
  solidity: "0.8.4",
    gasReporter: {

    currency: 'USD',

    token: 'ETH',

    coinmarketcap: process.env.CMC_KEY,

    gasPrice: 68, // https://polygonscan.com/gastracker

    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice'

  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/95b5b9a081d94021a5028b149874b1ef',
      accounts: [process.env.PRIVATE_KEY_M]
      gasPrice:
    },
    },
    etherscan: {
      apiKey: "DD3IJSICG9T7GPP6PAHRTXM16PIRJZHQ3A"
    }
  };
