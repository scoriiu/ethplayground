pragma solidity ^0.4.17;

contract Inbox {
    string private message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public constant returns (string) {
        return message;
    }

    function exclusiveAccess(int a, int b)  {
        a + b;
        a - b;
        a * b;
        a == 0;
    }
}

