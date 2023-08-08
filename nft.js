// Define an array to store NFTs
const NFTs = [];

// This function takes parameters and creates an NFT object using them for metadata.
// The NFT is then stored in the variable above.
function createNFT(nftName, nftUID, nftClass, nftLanguage) {
  const nft = {
    nftName: nftName,
    nftUID: nftUID,
    nftClass: nftClass,
    nftLanguage: nftLanguage,
  };
  NFTs.push(nft);
  console.log("NFT Created: " + nftName);
}

// Iterate through the array of NFTs and log their metadata using console.log()
function displayNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nNFT ID:\t\t" + (i + 1));
    console.log("Name:\t\t" + NFTs[i].nftName);
    console.log("RollNo:\t\t" + NFTs[i].nftUID);
    console.log("Class:\t\t" + NFTs[i].nftClass);
    console.log("Accent:\t" + NFTs[i].nftLanguage);
  }
}

// Print the total number of created NFTs to the console
function getTotalNFTs() {
  console.log("\nTotal NFTs Created: " + NFTs.length);
}

// Call the functions to create NFTs, display them, and get the total count
createNFT("W", "21BCT", "XYZ", "Golang");
createNFT("X", "21BCT", "XYZ", "C");
createNFT("Y", "21BCT", "XYZ", "JS");
createNFT("Z", "21BCT", "XYZ", "C++");

displayNFTs();
getTotalNFTs();
