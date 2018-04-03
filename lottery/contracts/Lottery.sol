pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        
        players.push(msg.sender);
    }

    function PRNG() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function pickWinner() public restricted {
        address winner = players[PRNG() % players.length];
        winner.transfer(address(this).balance);
        
        players = new address[](0);
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }

    function getPrizeValue() public view returns (uint) {
        return address(this).balance;
    }
}

