import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GameStashCard from './game_stash_card';
import * as LootMapping from '../../../../utils/data/my_collectibles/exchanger/alto_mapping';
import * as CONFIG from "../../../../contracts/config";

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
  const exchangeableBrainparts = [2,8]
  console.log(props);
  var itemsArr = []
  for(var i = 0; i < props["number"]; i++) {
    var currentItem = LootMapping.Data.LootItemMappings[i].brainfunc_item;
    var title = LootMapping.Data.LootItemMappings[i].brainfunc_item.title;
    var imgSrc, imgClass, lockSrc, lockText, lockClass;
    if(currentItem.status == "locked") {
      imgSrc= LootMapping.Data.General.brainfunc_item.locked_image;
      imgClass = `locked`;
      lockText = `Locked`;
      lockClass  = "locked";
      lockSrc = `/style/images/icons/lock_gray.png`;
    } else if(currentItem.status == "unlocked"){
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
    <div className='brainfunc_items_container'
    brainparts={props.brainparts}>
      <BrainFuncItemsRow number={5}/>
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

    this.GetBrainpartUri = this.GetBrainpartUri.bind(this);
    this.ExchangeClicked = this.ExchangeClicked.bind(this);
  }

  GetBrainpartUri = () => {
    return `{
      'owner':'something',
      'dna':'something',
      'category': 'something',
      'subcategory': 'something',
      'strength': 'something',
      'image': 'something'
    }`;
  }

  ExchangeClicked(value) {
    console.log("Exchange clicked!");
    console.log(value);
    // Instantiating brainpart contract
    const {web3} = window;
    const brainpartContract = web3.eth.contract(
      CONFIG.CONTRACTS.BRAINPART.ABI);
    const brainpartContractInstance = brainpartContract.at(
      CONFIG.CONTRACTS.BRAINPART.ADDRESS);
    // console.log(brainpartContractInstance);
    // console.log(web3.eth.defaultAccount);
    brainpartContractInstance.createBrainpart(
      "ts", "cerebrum", "leftFrontal", "1", this.GetBrainpartUri(),
      web3.eth.defaultAccount,
      {
        from:CONFIG.CONTRACTS.BRAINPART.CREATOR
      },
      (err,res) => {
      if(err) {
        console.log("Error:", err);
        return;
      }
      console.log("Transaction Hash: ", res);
      // this.setState({currentState: "buying"});
    });
  }

  render() {

    return (
      <div className='item_exchanger__container'>
        <AltoItemsComponent
        altoStashMap={this.props.altoStashMap}/>
        <ExchangeButtonsComponent
        selectFunction={this.ExchangeClicked}/>
        <BrainFuncItemsComponent
        brainparts={this.props.brainparts}/>
      </div>
    );
  }
}
