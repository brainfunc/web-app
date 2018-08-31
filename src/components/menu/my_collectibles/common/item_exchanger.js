import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GameStashCard from './game_stash_card';
import * as LootMapping from '../../../../utils/data/my_collectibles/exchanger/alto_mapping';
import * as CONFIG from "../../../../contracts/config";
import * as Collectibles from '../../../../utils/data/collectibles';

export const ExchangeButtonsComponent = function(props) {
  return(
    <div className='exchange_buttons_container'>
      <div className='button_container'>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}
          onClick={() => {props.selectFunction(0)} }/>
        </div>
      </div>
      <div className='button_container'>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}
          onClick={() => {props.selectFunction(1)} }/>
        </div>
      </div>
      <div className='button_container'>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}
          onClick={() => {props.selectFunction(2)} }/>
        </div>
      </div>
      <div className='button_container'>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}
          onClick={() => {props.selectFunction(3)} }/>
        </div>
      </div>
      <div className='button_container'>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}
          onClick={() => {props.selectFunction(4)} }/>
        </div>
      </div>
    </div>
  );
}

export const BrainFuncItemsRow = function(props) {
  // <img className='image'
  //   src={LootMapping.Data.LootItemMappings[i].brainfunc_item.image}/>
  // const exchangeableBrainparts = [2,8]
  // console.log(props);
  var itemsArr = []
  for(var i = 0; i < props["number"]; i++) {
    var currentItem = LootMapping.Data.LootItemMappings[i].brainfunc_item;
    var currentItemIndex = currentItem.index;
    var title = LootMapping.Data.LootItemMappings[i].brainfunc_item.title;
    var status = props.brainparts[currentItemIndex].strength == 0 ? "locked": "unlocked";
    var imgSrc, imgClass, lockSrc, lockText, lockClass;
    if(status == "locked") {
      imgSrc= LootMapping.Data.General.brainfunc_item.locked_image;
      imgClass = `locked`;
      lockText = `Locked`;
      lockClass  = "locked";
      lockSrc = `/style/images/icons/lock_gray.png`;
    } else if(status == "unlocked"){
      imgSrc = LootMapping.Data.LootItemMappings[i].brainfunc_item.image;
      imgClass = `unlocked`;
      lockText = `Unlocked`;
      lockClass  = "unlocked";
      lockSrc = `/style/images/icons/unlock_left.png`;
    }
    itemsArr.push(
      <div className='brainfunc_item_container' key={i}>
        <div className='status'>
          <img className={`lock-image ${imgClass}`} src={lockSrc}/>
          <div className={`lock-text ${lockClass}`}>{lockText} </div>
        </div>
        <div className='image-container'>
          <img className='image'
            src={imgSrc}/>
        </div>
        <div className='caption'>
          <div className='description'>
            {title}
          </div>
        </div>
      </div>
    );
  }
  return (itemsArr);
}

export const BrainFuncItemsComponent = function(props) {
  return(
    <div className='brainfunc_items_container'>
      <BrainFuncItemsRow number={5} brainparts={props.brainparts}/>
    </div>
  );
}

export const AltoItemsRow = function(props) {

  console.log(props);
  var itemsArr = []
  for(var i = 0; i < props["number"]; i++) {
    var imgSrc="";
    var lockText = "";
    var lockClass = "";
    const itemId = LootMapping.Data.LootItemMappings[i].alto_item.id;
    if(props.altoStashMap[itemId] > 0) {
      imgSrc= LootMapping.Data.LootItemMappings[i].alto_item.image;
      lockText = `Owned (${props.altoStashMap[itemId]})`;
      lockClass  = "owned";
    } else {
      imgSrc= LootMapping.Data.LootItemMappings[i].alto_item.gray_scale;
      lockText = "Not Owned";
      lockClass  = "not-owned";
    }

    itemsArr.push(
      <div className='alto_item_container' key={i}>
        <div className='status'>
          <div className={`lock-text ${lockClass}`}> {lockText} </div>
        </div>
        <div className='image-container'>
          <img className='image'
            src={imgSrc}/>
        </div>
        <div className='caption'>
          <div className='description'>
            {LootMapping.Data.LootItemMappings[i].alto_item.title}
          </div>
        </div>
      </div>
    );
  }
  return (itemsArr);
}


export const AltoItemsComponent = function(props) {
  return(
    <div className='alto_items_container'>
      <AltoItemsRow number={5} altoStashMap={props.altoStashMap}/>
    </div>
  );
}

export default class ItemExchanger extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   currentState: "default"
    // }

    this.GetExchangePossibility = this.GetExchangePossibility.bind(this);
    this.StartListeningForEvents = this.StartListeningForEvents.bind(this);

    this.handleExchangeClicked = this.handleExchangeClicked.bind(this);
  }

  // componentDidMount() {
  //   // Start listening for any events
  //   this.StartListeningForEvents();
  // }

  GetExchangePossibility(i) {
    const altoItemId = LootMapping.Data.LootItemMappings[i].alto_item.id;
    const altoItemOwned = this.props.altoStashMap[altoItemId] > 0;
    const brainpartItemId = LootMapping.Data.LootItemMappings[i].brainfunc_item.index;
    const brainpartItemOwned = this.props.brainparts[brainpartItemId].strength > 0;
    // console.log("Alto Brainpart");
    // console.log(altoItemOwned, brainpartItemOwned);

    if(!altoItemOwned) { return "impossible"; }
    if(altoItemOwned && brainpartItemOwned) { return "alreadyDone"; }
    if(altoItemOwned && !brainpartItemOwned) { return "possible"; }
  }

  StartListeningForEvents() {
    console.log("Starting to listen for events...");
    // Instantiating neuron contract
    const {web3} = window;
    const brainpartContract = web3.eth.contract(
      CONFIG.CONTRACTS.BRAINPART.ABI);
    const brainpartContractInstance = brainpartContract.at(
      CONFIG.CONTRACTS.BRAINPART.ADDRESS);
    // Or pass a callback to start watching immediately
    var self = this;
    var events = brainpartContractInstance.allEvents(function(error, log) {
      if (!error) {
        console.log(log);
        if(log.event == "Transfer") {
          // self.props.SetBrainparts();
          console.log("Exchanged!");
        }
      }
    });
  }

  handleExchangeClicked(value) {
    console.log("Exchange clicked...");
    const exchangeStatus = this.GetExchangePossibility(value);
    if(exchangeStatus == "impossible") {
      console.log("Exchange impossible!");
      return;
    }
    if(exchangeStatus == "alreadyDone") {
      console.log("Brain part already unlocked!");
      return;
    }

    if(exchangeStatus == "possible") {
      console.log("Exchange possible");
      console.log("Trying to initiate exchange");
      // Instantiating brainpart contract
      const {web3} = window;
      const brainpartContract = web3.eth.contract(
        CONFIG.CONTRACTS.BRAINPART.ABI);
      const brainpartContractInstance = brainpartContract.at(
        CONFIG.CONTRACTS.BRAINPART.ADDRESS);

      const unlockItem
      = LootMapping.Data.LootItemMappings[value].brainfunc_item;
      const categoryIndex = `${unlockItem.category}`;
      const subcategoryIndex =`${unlockItem.subcategory}`;
      const strength = "1"; // 1 since we are only unlocking

      console.log(brainpartToUnlock);

      var self = this;
      brainpartContractInstance.createBrainpart(
        "ts",categoryIndex,subcategoryIndex,strength,
        "<SampleUri>"
        ,web3.eth.defaultAccount,
        { from: CONFIG.CONTRACTS.BRAINPART.CREATOR },
        function(err, res) {
          if(err) { console.log(err); return; }
          // self.setState({currentState: "unlocking"})
          console.log("Initiated exchange...");
          console.log("Transaction hash:", res);
        })
    }
  }


  render() {
    return (
      <div className='item_exchanger__container'>
        <AltoItemsComponent
        altoStashMap={this.props.altoStashMap}/>
        <ExchangeButtonsComponent
        setBrainparts={this.props.SetBrainparts}
        selectFunction={this.handleExchangeClicked}/>
        <BrainFuncItemsComponent
        brainparts={this.props.brainparts}/>
      </div>
    );
  }
}