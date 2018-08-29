import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NeuronStash from "./sub/my_collectibles_neuron_stash";
import BrainpartStash from "./sub/my_collectibles_brainpart_stash";
import Exchange from "./sub/my_collectibles_exchange";

import SideBar from "./sub/my_collectibles_sidebar";

import * as CONFIG from "../../contracts/config";

export default class MyCollectibles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeComponent: "neuron_stash",
      walletAddress: "Loading...",
      neuronBalance: "Loading...",
      brainpartBalance: "Loading..."
    }

    this.setWalletAddressForProfile = this.setWalletAddressForProfile.bind(this);
    this.setNeuronBalanceForProfile = this.setNeuronBalanceForProfile.bind(this);
    this.setBrainpartBalanceForProfile = this.setBrainpartBalanceForProfile.bind(this);

    this.getImageForProfile = this.getImageForProfile.bind(this);
    this.getWalletAddressForProfile = this.getWalletAddressForProfile.bind(this);
    this.getBalanceForProfile = this.getBalanceForProfile.bind(this);

    this.displayNeuronStash = this.displayNeuronStash.bind(this);
    this.displayBrainpartStash = this.displayBrainpartStash.bind(this);
    this.displayExchange = this.displayExchange.bind(this);

    this.renderActiveComponent = this.renderActiveComponent.bind(this);

    this.InitializeWallet = this.InitializeWallet.bind(this);
  }

  componentDidMount() {
    this.InitializeWallet()
  }

  InitializeWallet() {
    const {web3} = window;
    const neuronContract = web3.eth.contract(
      CONFIG.CONTRACTS.NEURON.ABI);
    const neuronContractInstance = neuronContract.at(
      CONFIG.CONTRACTS.NEURON.ADDRESS);
    const brainpartContract = web3.eth.contract(
      CONFIG.CONTRACTS.BRAINPART.ABI);
    const brainpartContractInstance = neuronContract.at(
      CONFIG.CONTRACTS.BRAINPART.ADDRESS);

    var neuronBalanceCallback = function(err, res) {
      if(err) { console.log(err); return; }
      console.log("Neuron Balance of User", res.c[0]);
      const neuronBalance = res.c[0];
      this.setState({neuronBalance});
    }
    neuronBalanceCallback = neuronBalanceCallback.bind(this);

    var brainpartBalanceCallback = function(err, res) {
      if(err) { console.log(err); return; }
      console.log("Brainpart Balance of User", res.c[0]);
      const brainpartBalance = res.c[0];
      this.setState({brainpartBalance})
    }
    brainpartBalanceCallback = brainpartBalanceCallback.bind(this);

    const walletAddress = web3.eth.defaultAccount;
    this.setWalletAddressForProfile(walletAddress);
    this.setNeuronBalanceForProfile(walletAddress, neuronContractInstance, neuronBalanceCallback);
    this.setBrainpartBalanceForProfile(walletAddress, brainpartContractInstance, brainpartBalanceCallback);
  }

  setWalletAddressForProfile(walletAddress) {
    console.log("Setting wallet address");
    this.setState({walletAddress})
  }

  setNeuronBalanceForProfile(walletAddress, neuronContractInstance, callback) {
    neuronContractInstance.balanceOf(walletAddress, callback);
  }

  setBrainpartBalanceForProfile(walletAddress, brainpartContractInstance, callback) {
    brainpartContractInstance.balanceOf(walletAddress, callback);
  }

  getWalletAddressForProfile(){
    return this.state.walletAddress
  }

  getImageForProfile() {
    return "/style/images/template/wallet5.png";
  }

  getBalanceForProfile() {
    return "14.36 Ether";
  }

  displayNeuronStash() {
    this.setState({ activeComponent: "neuron_stash" });
    // return (
    //   <div className="neuron_stash"> Neuron Stash </div>
    // );
  }

  displayBrainpartStash() {
    this.setState({ activeComponent: "brainpart_stash" });
    // return (
    //   <div className="Brainpart_stash"> Brainpart Stash </div>
    // );
  }

  displayExchange() {
    this.setState({ activeComponent: "exchange" });
    // return (
    //   <div className="exchange"> Exchange </div>
    // );
  }

  renderActiveComponent() {
    if(this.state.activeComponent == "neuron_stash") {
      return <NeuronStash/>
    } else if(this.state.activeComponent == "brainpart_stash") {
      return <BrainpartStash/>
    } else if(this.state.activeComponent == "exchange") {
      return <Exchange/>
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="my_collectibles__container">
        <div className="profile_container">
          <div className="image_container"> <img src={this.getImageForProfile()}/> </div>
          <div className="wallet_container">
            <div className="title"> ERC721 BrainFunc Collectible Wallet </div>
            <div className="wallet_address">
              {this.getWalletAddressForProfile()}
            </div>
            <div className="neurons">
              <img src={"/style/images/icons/neurons_qty.png"}/>
              <div className='lbl'>Neurons</div>
              <div className='qty'>{this.state.neuronBalance} Total</div>
            </div>
            <div className="brainparts">
              <img src={"/style/images/icons/brainparts_qty.png"}/>
              <div className='lbl'>Brainparts</div>
              <div className='qty'>{this.state.brainpartBalance} Unlocked</div>
            </div>
          </div>
          <div className="action_container">
            <button className="action_button">
              Buy Neurons
            </button>
          </div>
        </div>

        <div className="stash_container">
          <SideBar
            activeComponent={this.state.activeComponent}
            displayNeuronStash={this.displayNeuronStash}
            displayBrainpartStash={this.displayBrainpartStash}
            displayExchange={this.displayExchange}/>
          <div className="active_component">
            { this.renderActiveComponent() }
          </div>
        </div>
      </div>
    );
  }

}
