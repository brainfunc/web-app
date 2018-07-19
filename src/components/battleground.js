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
      userAccount:'',
      metamaskState: ''
    }
    this.getWeb3Accounts = this.getWeb3Accounts.bind(this);
  }

   getWeb3Accounts() {
     const { web3 } = window;
     var periodicFunction = (function(){
       web3.eth.getAccounts((err, res) => {
         if(err) {
           console.log(err.message);
           return;
         }
         var account = res[0];
         if(account !== this.state.userAccount) {
           this.setState({
             userAccount: account,
             metamaskState: 'Active'
           });
         }
       })
     }).bind(this);
     var accountInterval = setInterval(periodicFunction, 1000);
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

  componentDidMount() {
    const { web3 } = window;
    if (typeof web3 == 'undefined') {
      // no web3, use fallback, can tell to install metamask or mist
      this.setState({ metamaskState: 'NotInstalled' });
      return;
    }

    this.startMonitoringIfOnRopstenTestNetwork((function(err) {
      if(err) {
        console.log(err.message);
        return;
      }
      // Success! Unlocked, installed and on Ropsten Test Network
      console.log('Success! User is on Ropsten Test Network');
      this.getWeb3Accounts();
    }).bind(this))
  }

  renderSuccessScreen() {
    return (
      <div className="aae__container">
        <Header/>
        EverythingCorrect!
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }

  renderMetamaskNotInstalledScreen() {
    return (
      <div className="aae__container">
        <Header/>
        <SectionTypeLocked
          image={Constants.lockedSection.image}
          titles={Constants.lockedSection.notInstalled.titles}
          description={Constants.lockedSection.notInstalled.description}
          lockState="notInstalled"
        />
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }

  renderIncorrectSetupScreen() {
    return (
      <div className="aae__container">
        <Header/>
        <SectionTypeLocked
          image={Constants.lockedSection.image}
          titles={Constants.lockedSection.incorrectSetup.titles}
          description={Constants.lockedSection.incorrectSetup.description}
          lockState="incorrectSetup"
        />
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }

  render() {
    console.log('Active User Account:-', this.state.userAccount);
    // Active user account is undefined in case of logout
    if(!this.state.userAccount) {
      if(this.state.metamaskState == 'NotInstalled') {
        return this.renderMetamaskNotInstalledScreen();
      }
      return this.renderIncorrectSetupScreen();
    }

    if(this.state.metamaskState == 'Active') {
      return this.renderSuccessScreen();
    }

  }

}
