import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NeuronStash from "./sub/my_collectibles_neuron_stash";
import BrainpartStash from "./sub/my_collectibles_brainpart_stash";
import Exchange from "./sub/my_collectibles_exchange";

import SideBar from "./sub/my_collectibles_sidebar";

export default class MyCollectibles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeComponent: "neuron_stash"
    }

    this.getImageForProfile = this.getImageForProfile.bind(this);
    this.getWalletAddressForProfile = this.getWalletAddressForProfile.bind(this);
    this.getBalanceForProfile = this.getBalanceForProfile.bind(this);

    this.displayNeuronStash = this.displayNeuronStash.bind(this);
    this.displayBrainpartStash = this.displayBrainpartStash.bind(this);
    this.displayExchange = this.displayExchange.bind(this);

    this.renderActiveComponent = this.renderActiveComponent.bind(this);
  }

  getImageForProfile() {
    return "/style/images/template/wallet4.png";
  }
  getWalletAddressForProfile(){
    return "0x75c088e1935468c0178b1e9733f250e9ad8d14f2"
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
              <div className='qty'>24 Total</div>
            </div>
            <div className="brainparts">
              <img src={"/style/images/icons/brainparts_qty.png"}/>
              <div className='lbl'>Brainparts</div>
              <div className='qty'>7 Unlocked</div>
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
