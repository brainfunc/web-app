import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SectionTypeLocked from '../components/common/section-type-locked';

import * as Constants from '../utils/data';

export default class Battleground extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userAccount:''
    }
    this.getWeb3Accounts = this.getWeb3Accounts.bind(this);
  }

  isMetamaskInstalled() {
      const { web3 } = window;
      if (typeof web3 === 'undefined') {
        // no web3, use fallback, can tell to install metamask or mist
        console.error("Metamask is not installed.");
        return false;
      }
      return true;
  }

  isMetamaskUnlocked() {
    const { web3 } = window;
    if(!web3.eth.defaultAccount) {
      console.log("Metamask is not unlocked");
      return false;
    }
    return true;
  }

  // For other network parameters
  // refer:- https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
  startMonitoringIfOnRopstenTestNetwork(callback) {
    const { web3 } = window;
    web3.version.getNetwork((err, netId) => {
      switch (netId) {
        case "3":
          callback(null);
          return true;
        default:
          callback(new Error('Not the Ropsten test network'));
          return false;
      }
    })
  }

   getWeb3Accounts() {
     const { web3 } = window;
     web3.eth.getAccounts((err, res) => {
       if(err) {
         console.log(err.message);
         return;
       }
       console.log('User account fetching success. Here is the account.');
       var account = res[0];
       console.log(account);
       // Changing state if account has changed
       if(account !== this.state.userAccount) {
         this.setState({'userAccount': account});
       }
     })
   }

  componentDidMount() {
    console.log('Is Metamask Installed:', this.isMetamaskInstalled());
    console.log('Is Metamask Unlocked', this.isMetamaskUnlocked());

    var callback = (function(err) {
      if(err) {
        console.log(err.message);
        return;
      }
      // Success! Unlocked, installed and on Ropsten Test Network
      console.log('Success! User is on Ropsten Test Network');
      const { web3 } = window;
      // Setting up provider using web3 and displaying current active account
      //console.log(web3.eth.defaultAccount);
      this.getWeb3Accounts();
    }).bind(this);

    this.startMonitoringIfOnRopstenTestNetwork(callback)
  }



  render() {
    // console.log('User Account', this.state.userAccount);
    return (
      <div className="aae__container">
        <Header/>
        <SectionTypeLocked
          image={Constants.lockedSectionData.image}
          titles={Constants.lockedSectionData.titles}
          description={Constants.lockedSectionData.description}
        />
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }

}
