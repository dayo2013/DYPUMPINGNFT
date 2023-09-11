
import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const myNFT = await ethers.getContractAt(
    "IMint",
    "0xa2F95990510861f2F796bb2c2006EB7582Eb3b58"
  );

  await myNFT.mint(
    signer.address,
    "ipfs://QmNNfazCgF9KaksgR5yZmDCMHQrBizgt7BnoFz8VYLwWf2"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
