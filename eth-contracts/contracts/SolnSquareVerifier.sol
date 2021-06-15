pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is verifier {
    
}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {




// TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address _address;
    }

// TODO define an array of the above struct
    Solution[] solutionArray;

// TODO define a mapping to store unique solutions submitted
    mapping(uint256 => Solution) private solutionMap;


// TODO Create an event to emit when a solution is added
    event newSolution(address _address, uint256 _index);


// TODO Create a function to add the solutions to the array and emit the event
    function solutionCreated(address _address, uint256 _index) public
        {
            solved = Solution({_address: _address, index: _index});
            solutionArray.push(solved);

            emit newSolution(solutionMap[_index]._address, _index);
        }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    function mintNewNFT() public 
        {
            require(); // solution exists
            // all the minting shit from ERC721Mintable
            mint(_address, tokenId);
        }
}