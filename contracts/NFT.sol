// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721{
     string BASEURL;
    constructor(address to,string memory url) ERC721("DY","PUMP"){
        _mint (to, 1);
         BASEURL = url;
    }

    function _baseURI() internal view override returns (string memory) {
        return BASEURL;
    }


}
