// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintPass is ERC1155, ERC1155Supply, Ownable {

    uint constant public MAXIMUM_SUPPLY = 250;
    uint constant public MINT_PASS = 0;
    uint public maxMintingPerTx = 10;
    uint public currentMintingFee = 100000000000000000;

    constructor() ERC1155("ipfs://QmTJvwsDN2ELbtbuL9HbBJqQiT4N7uEo8ZLEfvpVJfuXM3") {}


    function mint(uint256 amount) public payable
    {
        require(msg.value >= amount * currentMintingFee, "Insufficent Minting Fee");
        require(totalSupply(MINT_PASS) + amount <= MAXIMUM_SUPPLY, "Total Supply = 250");
        require(amount <= maxMintingPerTx, "Limit 10 Per Wallet");
        _mint(msg.sender, MINT_PASS, amount, "");
    }

    function withdrawETH() external onlyOwner {
        owner().call{ value: address(this).balance }("");
    }

    function setMintingFee(uint256 weiAmount) external onlyOwner {
        currentMintingFee = weiAmount;
    }

    function setMaxMintingPerTx(uint256 _maxMintingPerTx) external onlyOwner {
        maxMintingPerTx = _maxMintingPerTx;
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    internal
    override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
