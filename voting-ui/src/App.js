import React from 'react';
import './App.css';
import Web3 from 'web3';

import NaiveStateDAO from './NaiveStateDAO.json'

const daoAddress = "0xDD0E544Bc37A58423CEE63E67d05e7d978DEE6c7"

let web3
let accounts
let options

async function addWeb3() {
  // Modern dapp browsers...
  if (window.ethereum) {
    web3 = new Web3(window.ethereum)
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (error) {
      // User denied account access...
      console.log(error)
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider)
  }
  // Non-dapp browsers...
  else {
    console.log('Minting, buying, or selling tokens requires a connection to Ethereum. \
                   Consider installing/logging into the Metamask browser extension.')
  }
}

async function init(defaults) {
  await addWeb3()
  accounts = await web3.eth.getAccounts()
  console.log("accounts", accounts)

  if (defaults === undefined) {
    defaults = {
      from: accounts[0],
      gasPrice: '1000000'
    }
  }
  options = defaults
  console.log(daoAddress)
  const stateDAO = await new web3.eth.Contract(
    NaiveStateDAO.abi,
    daoAddress,
    defaults
  )
  console.log("init", options, stateDAO)
  return stateDAO
}

function App() {
  let currentUi = "loading current ui"
  init().then(async (dao) => {
    console.log(dao)
    currentUi = await dao.methods.ui().call()
    console.log(currentUi)
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
