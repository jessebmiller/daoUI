# daoUI
A DAO that manages it's UI development

# Participating using Remix
## How to Propose a New UI

1. Go to [remix](https://remix.ethereum.org).

2. Connect to the Ropsten testnet using Metamask (or some other web3 provider).

3. Load the DAO contract at `/contracts/NaiveStateDAO.sol` in this repo.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.31.44%20PM.png"> 

4. Select the DAO contract.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.35.08%20PM.png"> 

5. Enter the Solidity environment.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.35.24%20PM.png"> 

6. Compile the contract.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.35.47%20PM.png"> 

7. Go to the "Deploy & Run Transactions" tab.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.38.18%20PM.png"> 

8. Change the "Environment" dropdown to "Injected Web3."

9. Paste in the address, "0x7F2F9D06B9CccBf685e4a84449f67604474D20d4", and click "At Address."

10. Open the deployed contract.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.38.30%20PM.png"> 

11. Enter (in "quotes") the URL where the UI you want to propose is hosted, and click propose, then confirm the transaction in Metamask. We suggest making a [github gist](https://help.github.com/en/articles/creating-gists).
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%208.39.40%20PM.png"> 

12. To confirm that your proposal was submitted, enter the URL you submitted into "proposals" and click the button.

13. Now, go tell peope to vote for your proposal!

## How to Vote for Proposals
1. Follow the "How to Propose..." directions until you've finished step 10.</li>
2. Click "Join" to gain voting power in the DAO.</li>
3. Into the "vote" form, write `"PROPOSED URL", true` to vote yes, or `"PROPOSED URL", false` to vote no.
<img style="height:400px;" src="https://raw.githubusercontent.com/jessebmiller/daoUI/master/Screen%20Shot%202019-09-07%20at%209.17.47%20PM.png">
