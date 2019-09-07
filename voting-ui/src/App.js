import React from 'react';
import './App.css';
import Web3 from 'web3';

import NaiveStateDAO from './NaiveStateDAO.json'

async function addWeb3() {
  // Modern dapp browsers...
  if (window.ethereum) {
      window.web3 = new Web3(ethereum)
      try {
          // Request account access if needed
          await ethereum.enable();
      } catch (error) {
          // User denied account access...
          console.log(error)
      }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
  }
  // Non-dapp browsers...
  else {
      console.log('Minting, buying, or selling tokens requires a connection to Ethereum. \
                   Consider installing/logging into the Metamask browser extension.')
  }
}

let web3
let accounts
let stateDAO
let options

async function init(defaults) {
  if (web3 !== undefined) { return }

  // Development env (non-browser)
  if (process.env.DEVELOPMENT === 'true') {
    // add ganache web3
    const provider = new Web3.providers.WebsocketProvider('ws://127.0.0.1:8545')
    web3 = new Web3(provider)
  } else {
    await addWeb3()
    web3 = window.web3
  }

  accounts = await web3.eth.getAccounts()

  if (defaults === undefined) {
    defaults = {
      from: accounts[0],
      gasPrice: '1000000'
    }
  }
  options = defaults
  console.log("init", options)
  stateDAO = await new web3.eth.Contract(
    NaiveStateDAO.abi,
    process.env.STATE_DAO_ADDR,
    defaults
  )
}

function App() {
  init()
  console.log(stateDAO)
  return (
    <div className="App">
    </div>
  );
}

export default App;
