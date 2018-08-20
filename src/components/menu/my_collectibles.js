import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NeuronStash from "./sub/my_collectibles_neuron_stash";
import BrainpartStash from "./sub/my_collectibles_brainpart_stash";
import Exchange from "./sub/my_collectibles_exchange";

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
    return "/style/images/template/logov3.5.png";
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
            <div className="title"> BrainFunc Wallet </div>
            <div className="wallet_address">
              Address:- {this.getWalletAddressForProfile()}
            </div>
            <div className="total_item_value">
              Total Value:- ~ {this.getBalanceForProfile()}
            </div>
          </div>
        </div>

        <div className="stash_container">
          <div className="sidebar">
            <div className="neurons_button sidebar-button"
              onClick={this.displayNeuronStash}>
            Neurons
            </div>
            <div className="brainparts_button sidebar-button"
              onClick={this.displayBrainpartStash}>
            Brain Parts
            </div>
            <div className="exchange_button sidebar-button"
              onClick={this.displayExchange}>
            Exchange
            </div>
          </div>
          <div className="active_component">
            { this.renderActiveComponent() }
          </div>
        </div>
      </div>
    );
  }

}
