pragma solidity >=0.4.21 <0.6.0;

contract NaiveStateDAO {
  address owner;

  mapping(address => uint256) public holdings;
  uint256 public maxHoldings;
  uint256 public votingPeriodBlocks;

  string public ui;

  // mapping from proposed ui, to the block of the end of the voting period
  mapping(string => uint256) public proposals;

  // keccak(member, proposedUi) => voted
  mapping(bytes32 => bool) public voted;

  mapping(string => uint256) public yays;
  mapping(string => uint256) public nays;

  constructor() public {
    maxHoldings = 100;
    owner = msg.sender;
    votingPeriodBlocks = 80; // about 20 minutes
  }

  function set(string memory newUi) public {
    require(msg.sender == owner);
    ui = newUi;
  }

  // propose state change
  function propose(string memory proposedUi) public {
    // ui never proposed or voting period has passed
    require(proposals[proposedUi] < block.number);
    require(keccak256(abi.encodePacked(proposedUi)) != keccak256(abi.encodePacked(ui)));
    proposals[proposedUi] = block.number + votingPeriodBlocks;
    delete yays[proposedUi];
    delete nays[proposedUi];
  }

  // vote on proposal
  function vote(string memory proposedUi, bool yay) public {
    // message sender is a member
    require(holdings[msg.sender] > 0);
    // voting period has not passed
    require(proposals[proposedUi] > block.number);
    bytes32 voteId = keccak256(abi.encodePacked(msg.sender, proposedUi));
    // member has not voted
    require(voted[voteId] == false);
    if (yay) {
      yays[proposedUi] = yays[proposedUi] + holdings[msg.sender];
    } else {
      nays[proposedUi] = nays[proposedUi] + holdings[msg.sender];
    }
  }

  // execute proposal
  function execute(string memory proposedUi) public {
    // voting period has passed
    require(proposals[proposedUi] < block.number, "Voting period hasn't passed");

    // vote passed
    require(yays[proposedUi] > nays[proposedUi], "Did not pass");

    // reset yays and nays
    delete yays[proposedUi];
    delete nays[proposedUi];

    ui = proposedUi;
  }

  // join
  function join() public {
    require(holdings[msg.sender] == 0);
    holdings[msg.sender] = 1;
  }
}
