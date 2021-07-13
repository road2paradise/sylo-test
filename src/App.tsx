import React, { useState } from 'react';
import './App.css';
import Web3 from 'web3';
import { Login } from './pages/Login';
import { Address } from './pages/Address';

export interface IAccount {
  account: string;
}

export interface IWeb3 {
  web3: Web3;
}

function App() {
  // In future you wouldnt want to save account as a state, since the user 
  // might already have integrated their metamask onto the browser.
  const [account, setAccount] = useState<IAccount>({ account: "" });
  const [web3, setWeb3] = useState<IWeb3>({ web3: new Web3(null) });

  function connectWallet() {
    checkAccount();
  };

  async function checkAccount() {
    // Lets assume that we dont have a local blockchain, otherwise
    // use an OR statement for a local blockchain like Web3.givenProvider || http://localhost:somePort.
    const web3 = new Web3(Web3.givenProvider);
    setWeb3({ web3: web3 });
    const accounts = await web3.eth.getAccounts();
    setAccount({ account: accounts[0] });
  }


  return (
    <div className="App">
      {/* Poor mans react-router here created with if statements.*/}
      {account.account === "" ? <Login connectWallet={connectWallet} /> : <Address />}
    </div>
  );
}

export default App;
