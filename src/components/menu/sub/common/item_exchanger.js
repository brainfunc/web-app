import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GameStashCard from './game_stash_card';
import * as LootMapping from '../../../../utils/data/my_collectibles/exchanger/alto_mapping';

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

  console.log(props);
  var itemsArr = []
  for(var i = 0; i < props["number"]; i++) {
    itemsArr.push(
      <div className='brainfunc_item_container' key={i}>
        <div className='status'>
          <img className='lock-image' src={`/style/images/template/lock.png`}/>
          <div className='lock-text'> Locked </div>
        </div>
        <div className='image-container'>
          <img className='image'
            src={LootMapping.Data.General.brainfunc_item.locked_image}/>
        </div>
        <div className='caption'>
          <div className='description'>
            {LootMapping.Data.LootItemMappings[i].brainfunc_item.title}
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
    this.ExchangeClicked = this.ExchangeClicked.bind(this);
  }

  ExchangeClicked(value) {
    console.log("Exchange clicked!");
    console.log(value);
    //console.log(event.target.custom_index);
    //console.log(event.target.id);
  }

  render() {

    return (
      <div className='item_exchanger__container'>
        <AltoItemsComponent
        altoStashMap={this.props.altoStashMap}/>
        <ExchangeButtonsComponent
        selectFunction={this.ExchangeClicked}/>
        <BrainFuncItemsComponent/>
      </div>
    );
  }
}
