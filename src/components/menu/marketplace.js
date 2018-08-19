import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';
import MarketplaceDetails from './sub/marketplace_details';
import MarketplaceStash from './sub/marketplace_stash';
import MarketplacePacks from './sub/marketplace_packs';

import * as CONFIG from "../../config/config";

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPack: "cerebrum",
      buyQuantity: 0,
      currentState: "default"
    };
    this.SwitchSelectedPack = this.SwitchSelectedPack.bind(this);
    this.BuyNeuronsClicked = this.BuyNeuronsClicked.bind(this);
    this.UpdateRootState = this.UpdateRootState.bind(this);

    this.GetTotalAmountToPay = this.GetTotalAmountToPay.bind(this);
    this.GetTotalAmountToPay = this.GetTotalAmountToPay.bind(this);
  }

  SwitchSelectedPack = (packType) => {
    // console.log(packType);
    this.setState({ selectedPack: packType });
  }

  GetTotalAmountToPay = () => {
    // Calculate total amount to pay based on state
    const priceForState = Constants.PRICE_MAP[this.state.selectedPack];
    const totalPrice = priceForState * this.state.buyQuantity;
    console.log("Buy Quantity", this.state.buyQuantity);
    return  totalPrice;
  }

  GetNeuronUri = () => {
    return `{
      'owner':'something',
      'dna':'something',
      'category': 'something',
      'subcategory': 'something',
      'image': 'something'
    }`;
  }

  BuyNeuronsClicked = () => {
    console.log("Buying Neurons...");
    this.setState({
      currentState: "purchasing"
    })
    // Instantiating neuron contract
    const {web3} = window;
    const neuronContract = web3.eth.contract(
      CONFIG.CONTRACTS.NEURON.ABI);
    const neuronContractInstance = neuronContract.at(
      CONFIG.CONTRACTS.NEURON.ADDRESS);
    // console.log(neuronContractInstance);
    neuronContractInstance.createNeuron(
      "ts", "cerebrum", "leftFrontal", this.GetNeuronUri(),
      0x75c088e1935468c0178b1e9733f250e9ad8d14f2,
      {
        from:web3.eth.defaultAccount,
        value:web3.toWei(
          `${this.GetTotalAmountToPay()}`,
          "ether")
      },
      (err,res) => {
      if(err) {
        console.log("Error:", err);
        return;
      }
      // console.log("Transaction Hash: ", res);
    });
  }

  UpdateRootState = (qty) => {
    console.log("Updating buyQuantity...");
    this.setState({
      buyQuantity: qty
    })
  }

  render() {
    return (
      <div className="marketplace__container">
        <div className='heading'> Neuron Packs</div>
        <div className='description-wrapper'>
          <div className='description'>
            The neuron packs give you the ability to purchase a set of neurons.
            These neurons will be a random combination of the 13 types available,
            with any number of any type available. They will help you construct
            your brain parts required in battles. Buying larger quantitites of
            neurons mean you can buy them at a discounted price!
          </div>
        </div>
        <MarketplacePacks
          SwitchSelectedPack= {this.SwitchSelectedPack}/>
        <MarketplaceDetails
          type = {this.state.selectedPack}
          IncrementItem = {this.IncrementItem}
          DecreaseItem = {this.DecreaseItem}
          BuyNeuronsClicked = {this.BuyNeuronsClicked}
          UpdateRootState = {this.UpdateRootState}/>
        <MarketplaceStash
          currentState = {this.state.currentState}
          buyQuantity = {this.state.buyQuantity}
          type = {this.state.selectedPack}/>
      </div>
    );
  }

}
