// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const fs = require("fs");
const hre = require("hardhat");

async function main() {

//   const HASHMarket = await hre.ethers.getContractFactory("HASHMarket");
//   const hashMarket = await HASHMarket.deploy();
//   await hashMarket.deployed();
//   console.log("HASHMarket deployed to:", hashMarket.address);
//
//   const NFT = await hre.ethers.getContractFactory("NFT");
//   const nft = await NFT.deploy(hashMarket.address);
//   await nft.deployed();
//   console.log("nft deployed to:", nft.address);
// //  console.log(JSON.stringify({nft, hashMarket},null,2))

const MintPassERC1155 = await hre.ethers.getContractFactory("MintPass");
const MintPassDeployed = await MintPassERC1155.deploy();
await MintPassDeployed.deployed();
console.log("MintPassERC1155 deployed to:", MintPassDeployed.address);

let config = `
export const mintpassaddress = "${MintPassDeployed.address}"
`

let data = JSON.stringify(config)
fs.writeFileSync('config.js', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
