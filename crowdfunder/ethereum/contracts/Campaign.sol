pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimumToRaise) public {
        address newCampaign = new Campaign(msg.sender, minimumToRaise);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint amount;
        address recipient;
        bool completed;
        uint approvalCount;
        mapping(address => bool) approvers;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public contributors;
    uint public contributorsCount;
    Request[] public requests;

    modifier isCreator () {
        require(msg.sender == manager);
        _;
    }

    function Campaign(address creator, uint minimum) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        contributors[msg.sender] = true;
        contributorsCount++;
    }

    function createRequest(string description, uint amount, address recipient) public isCreator {
        Request memory request = Request({
           description: description,
           amount: amount,
           recipient: recipient,
           completed: false,
           approvalCount: 0
        });

        requests.push(request);
    }

    function approveRequest(uint requestId) public {
        require(contributors[msg.sender]);
        require((requestId >= 0) && (requestId < requests.length));

        Request storage request = requests[requestId];
        require(!request.approvers[msg.sender]);

        request.approvers[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint requestId) public isCreator {
        require((requestId >= 0) && (requestId < requests.length));
        Request storage request = requests[requestId];

        require(request.approvalCount >= (contributorsCount / 2));
        require(!request.completed);

        request.recipient.transfer(request.amount);
        request.completed = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            contributorsCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
}


