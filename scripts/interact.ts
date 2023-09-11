import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const NFT = await ethers.getContractAt(
    "IMint",
    "0x453Be919B1a2e738fEbA95fb4A29E649587FeB90"
  );

  await NFT.mint(
    signer.address,
    "ipfs://QmPXjXLePXBSZDH8GWRL9ywHqkFDHKq6SY1JSBk8ZxHndZ"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});