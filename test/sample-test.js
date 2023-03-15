const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HASHMarket", function () {
  it("Should create and execute market sales", async function () {
    const MintPass = await ethers.getContractFactory("MintPass")
    const market = await MintPass.deploy()
    await market.deployed()
    const marketAddress = market.address

    const tx = await market.mint(1, { value: 100000000000000000 });

    // const NFT = await ethers.getContractFactory("NFT")
    // const nft = await NFT.deploy(marketAddress)
    // await nft.deployed()
    // const nftContractAddress = nft.address
    //
    // let listingPrice = await market.getListingPrice()
    // listingPrice = listingPrice.toString()
    //
    // const auctionPrice = ethers.utils.parseUnits('1', 'ether')
    //
    // await nft.createToken("www.tokenloaction.com")
    // await nft.createToken("www.tokenloaction2.com")
    //
    // await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    // await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })
    //
    // const [_, buyerAddress] = await ethers.getSigners()
    //
    // await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice})
    //
    // let items = await market.fetchMarketItems()
    //
    // items = await Promise.all(items.map(async i => {
    //   const tokenUri = await nft.tokenURI(i.tokenId)
    //   let item = {
    //     price: i.price.toString(),
    //     tokenId: i.tokenId.toString(),
    //     seller: i.seller,
    //     owner: i.owner,
    //     tokenUri
    //   }
    //   return item
    // }))
    //
    // console.log('items: ', items)
  });
});
