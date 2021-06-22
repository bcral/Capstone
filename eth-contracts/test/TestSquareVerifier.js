// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require('verifier');
var Proof = require('../../zokrates/code/square/proof');

contract('Verifier', accounts => {

    const acct = accounts[0];

    describe('create instance of Verifier', function () {
        beforeEach(async function () { 
            this.contract = await Verifier.new({from: acct});
        });

        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        it('should verify that proofs match', async function () {

            let result = await this.contract.verifyTx.call(Proof.proof.a, Proof.proof.b, Proof.proof.c, Proof.inputs, {from: acct}); 

            assert.equal(result, true, "Proofs should be the same");
        });

            
        // Test verification with incorrect proof
        // TEST SHOULD FAIL WITH INVALID OPCODE.  UNCOMMENT TO RUN.
        // it('should verify that proofs do not match', async function () {

        //     let result = await this.contract.verifyTx.call(Proof.invalidProof, Proof.proof.b, Proof.proof.c, Proof.inputs, {from: acct}); 

        //     assert.equal(result, false, "Test should force reversion. Proofs should not be the same");
        // });
    });
});