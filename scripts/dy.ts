import { ethers } from "hardhat";

async function main() {


    const NFT= await ethers.deployContract("NFT",["0xfc4e42e49ba01613571333B7E10177D991a1A43e","ipfs://QmPXjXLePXBSZDH8GWRL9ywHqkFDHKq6SY1JSBk8ZxHndZ "]);

    await NFT.waitForDeployment();


  console.log(NFT.target)
    
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
