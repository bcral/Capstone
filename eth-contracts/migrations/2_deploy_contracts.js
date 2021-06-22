// migrating the appropriate contracts
var SquareVerifier = artifacts.require("../zokrates/code/square/Verifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
// var ERC721Mintable = artifacts.require("./CustomERC721Token");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier).then(() => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
  // deployer.deploy(ERC721Mintable);
};
