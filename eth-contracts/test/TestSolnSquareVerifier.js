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
                await this.solutionContract.mintNewNFT(acct, 1, Proof.proof.a, Proof.proof.b, Proof.proof.c, Proof.inputs, {from: acct, gas: 9999999});
            } catch(e) {console.log(e)}

            let result = await this.solutionContract.totalSupply.call({from: acct});
            assert.equal(result, 1, "1 new token should exist");
        });

        // Test if a duplicate proof/input token can be created
        // THIS TEST SHOULD FORCE A REVERSION.  UNCOMMENT TO RUN.

        // it('should revert because of duplicate proof/inputs', async function () {

        //     // tokenId must be greater than 0
        //     try {
        //         await this.solutionContract.mintNewNFT(acct, 1, Proof.proof.a, Proof.proof.b, Proof.proof.c, Proof.inputs, {from: acct, gas: 9999999});
        //         await this.solutionContract.mintNewNFT(acct, 1, Proof.proof.a, Proof.proof.b, Proof.proof.c, Proof.inputs, {from: acct, gas: 9999999});
        //     } catch(e) {console.log(e)}

        //     let result = await this.solutionContract.totalSupply.call({from: acct});
        //     assert.equal(result, 1, "Should pass, despite reversion. The first token should have been minted.");
        // });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should add a new solution', async function () {

            try {
                await this.solutionContract.mintNewNFT(acct, 2, Proof.proof1.a, Proof.proof1.b, Proof.proof1.c, Proof.inputs1, {from: acct, gas: 9999999});
            } catch(e) {console.log(e)}

            let result = await this.solutionContract.totalSupply.call({from: acct});
            assert.equal(result, 1, "1 new token should exist, but with new solution(making total of 2)");
        });

        // Make 7 more ERC721 tokens...
        it('should mint 8 new ERC721 tokens', async function () {

            // tokenId must be greater than 0
            try {
                await this.solutionContract.mintNewNFT(acct, 3, Proof.proof2.a, Proof.proof2.b, Proof.proof2.c, Proof.inputs2, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 4, Proof.proof3.a, Proof.proof3.b, Proof.proof3.c, Proof.inputs3, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 5, Proof.proof4.a, Proof.proof4.b, Proof.proof4.c, Proof.inputs4, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 6, Proof.proof5.a, Proof.proof5.b, Proof.proof5.c, Proof.inputs5, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 7, Proof.proof6.a, Proof.proof6.b, Proof.proof6.c, Proof.inputs6, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 8, Proof.proof7.a, Proof.proof7.b, Proof.proof7.c, Proof.inputs7, {from: acct, gas: 9999999});
                await this.solutionContract.mintNewNFT(acct, 9, Proof.proof8.a, Proof.proof8.b, Proof.proof8.c, Proof.inputs8, {from: acct, gas: 9999999});
            } catch(e) {console.log(e)}

            let result = await this.solutionContract.totalSupply.call({from: acct});
            assert.equal(result, 7, "7 new tokens should exist");
        });
    });

});

