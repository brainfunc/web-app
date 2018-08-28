import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GameStashCard from './game_stash_card';
import * as LootMapping from '../../../../utils/data/my_collectibles/exchanger/alto_mapping';

export const ExchangeButtonsRow = function(props) {
  console.log(props);
  var buttonsArr = []
  for(var i = 0; i < props["number"]; i++) {
    buttonsArr.push(
      <div className='button_container' key={i}>
        <div className="exchange_button_wrapper">
          <img className='exchange_button'
          src={"/style/images/icons/transmorgify.png"}/>
        </div>
      </div>
    );
  }
  return (buttonsArr);
}

export const ExchangeButtonsComponent = function(props) {
  return(
    <div className='exchange_buttons_container'>
      <ExchangeButtonsRow number={5}/>
    </div>
  );
}

export const BrainFuncItemsRow = function(props) {
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
            src={LootMapping.Data.LootItemMappings[i].brainfunc_item.image}/>
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
    itemsArr.push(
      <div className='alto_item_container' key={i}>
        <div className='status'>
          <img className='lock-image' src={`/style/images/template/lock.png`}/>
          <div className='lock-text'> Locked </div>
        </div>
        <div className='image-container'>
          <img className='image'
            src={LootMapping.Data.LootItemMappings[i].alto_item.image}/>
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
      <AltoItemsRow number={5}/>
    </div>
  );
}

export default class ItemExchanger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item_exchanger__container'>
        <AltoItemsComponent/>
        <ExchangeButtonsComponent/>
        <BrainFuncItemsComponent/>
      </div>
    );
  }
}
