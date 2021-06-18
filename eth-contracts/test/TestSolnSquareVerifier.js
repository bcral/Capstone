// Test if a new solution can be added for contract - SolnSquareVerifier
var SolutionVerifier = artifacts.require('SolnSquareVerifier');

var Proof = require('../../zokrates/code/square/proof');

contract('SolnSquareVerifier', accounts => {

    const acct = accounts[0];

    describe('create instance of Verifier', function () {
        beforeEach(async function () { 
            this.solutionContract = await SolutionVerifier.new({from: acct});
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('should mint new ERC721 token', async function () {

            // tokenId must be greater than 0
            try {
                await this.solutionContract.mintNewNFT(acct, 1, Proof.proof.a, Proof.proof.b, Proof.proof.c, {from: acct, gas: 9999999});
            } catch(e) {console.log(e)}

            let result = await this.solutionContract.totalSupply.call({from: acct});
            assert.equal(result, 1, "1 new token should exist");
        })

        // Make 9 more ERC721 tokens...

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should add a new solution', async function () {

            try {
                await this.solutionContract.mintNewNFT(acct, 2, Proof.proof1.a, Proof.proof1.b, Proof.proof1.c, {from: acct, gas: 9999999});
            } catch(e) {console.log(e)}

            let result = await this.solutionContract.totalSupply.call({from: acct});
            assert.equal(result, 1, "1 new token should exist, but with new solution(making total of 2)");
        })
    });
});

