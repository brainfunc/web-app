import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';
import GameStashCard from './common/game_stash_card';
import ItemExchanger from './common/item_exchanger';
import * as OwnershipContract from '../../../contracts/Ownership';
import * as CONFIG from "../../../config/config";

export const BackButton = function(props) {
  return(
    <div className='action-button-footer'>
      <div className='footer-image-container left'>
        <img className='footer-image' src={`/style/images/icons/submission_footer.png`}/>
      </div>
      <div className='action-button-wrapper'>
        <button className='action-button' onClick={() => {props.selectFunction()}}>
          Back to Universe
        </button>
      </div>
      <div className='footer-image-container right'>
        <img className='footer-image'
        src={`/style/images/icons/submission_footer.png`}/>
      </div>
    </div>
  );
}

export const TitlePage = function(props) {
  return(
    <div className='exchange__container'>
      <div className='title'> What is this? </div>
      <div className='description'>
        {`The BrainFunc Game Universe is meant to be a place where you can use
        collectible items earned in other games inside BrainFunc. Right now, you can
        create Brainparts using collectibles earned in other games. Exciting isn't it?
        We know, we're excited too! For now, we support the Alto Cryptochallenge Loot
        (5 items, can be used to construct or boost associated brain parts), but plan
        to support other games in the future! Select the Alto Challenge Loot from
        below to get started.`}
      </div>
      <div className='game_stash__container'>
        <GameStashCard SelectCard={props.SelectCard}/>
      </div>
    </div>
  );
}
export default class Exchange extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: "title",
      selectedCard: "none"
    }

    this.SelectCard = this.SelectCard.bind(this);
    this.SwitchToTitlePage = this.SwitchToTitlePage.bind(this);

    this.StartListeningForEvents = this.StartListeningForEvents.bind(this);
  }

  componentDidMount() {
    console.log("Component Mounted");
    this.StartListeningForEvents();
  }

  StartListeningForEvents() {
    console.log("Starting to listen for events...");
    const data = OwnershipContract.Data;
    const networkID = CONFIG.NETWORK_ID; // "4 for Rinkeby Network"
    // Instantiating ownership contract
    const {web3} = window;
    const ownershipInstance = web3.eth.contract(data.abi)
    .at(data.networks[networkID].address);
    console.log(ownershipInstance);
    //const neuronContract = web3.eth.contract(
    //   CONFIG.CONTRACTS.NEURON.ABI);
    // const neuronContractInstance = neuronContract.at(
    //   CONFIG.CONTRACTS.NEURON.ADDRESS);
    // // Or pass a callback to start watching immediately
    // var currentComponent = this;
    // var events = neuronContractInstance.allEvents(function(error, log) {
    //   if (!error) {
    //     console.log(log);
    //     if(log.event == "Transfer") {
    //       currentComponent.setState({currentState: "bought"});
    //     }
    //   }
    // });
  }

  SelectCard() {
    console.log("Alto loot selected!");
    this.setState({
      currentPage: "exchanger",
      selectedCard: "alto" });
  }

  SwitchToTitlePage() {
    this.setState({
      currentPage: "title",
      selectedCard: "none"
    })
  }

  render() {
    if(this.state.currentPage == "title") {
      return <TitlePage SelectCard={this.SelectCard}/>
    } else if(this.state.currentPage == "exchanger") {
      return(
        <div className='exchange__container'>
          <div className='title'> Transmorgification Chamber </div>
          <div className='description'>
            {`You can transmorgify the 5 parts from the challenge loot shown below
              in exchange for the associated brainparts. Click on the transmorgify
              button to transmorgify these loot items to brain parts.`}
          </div>
          <ItemExchanger/>
          <BackButton selectFunction={this.SwitchToTitlePage}/>
        </div>
      );
    }

  }
}
