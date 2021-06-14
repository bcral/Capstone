// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
var ERC721Mintable = artifacts.require("./CustomERC721Token.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
//  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
};
