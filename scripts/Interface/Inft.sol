// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

interface Inft {
    function NFT() external payable;

    function url(uint256 token_ID) external view returns (string memory);
}
