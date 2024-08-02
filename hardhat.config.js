require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "6a711ec76a4f34b90616dc23a4e124713c8598cc18ce5bc71bf6a29b6194dbee";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
