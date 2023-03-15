// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const networkName = hre.network.name

async function GetMintPass() {
  const MintPass = await hre.ethers.getContractFactory('MintPass');
  const contract = await MintPass.attach("0x91e142c82b83b51a4ca2eb7fb1795d52e54b30aa");
  console.log("GetMintPass deployed to:", contract.address.toLowerCase());
  return contract;
};


async function main() {
  const [{ address }, accountTwo] = await hre.ethers.getSigners();
  console.log(`account: ${address}`);
  const contract = await GetMintPass()
  const Tx = await contract.withdrawETH()
  console.log(Tx.hash)
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
