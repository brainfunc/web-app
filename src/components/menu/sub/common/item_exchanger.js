// <div className='title'> LootMapping.Data.LootItemMappings[i].brainfunc_item.title </div>
// <img className='card_image'
//   src={`/style/images/cross-game/alto_loot.png`}/>
// <div className='card_description'>
//   <div className='number'> Items Owned </div>
//   <div className='price'> 15 </div>
// </div>
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
        <button className='exchange_button'> btn </button>
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
        <div className='image-container'>
          <img className='image'
            src={LootMapping.Data.LootItemMappings[i].brainfunc_item.image}/>
        </div>
        <div className='caption'>
          <div className='description'>
            {LootMapping.Data.LootItemMappings[i].brainfunc_item.title}
          </div>
          <div className='status'>
            <img className='lock-image' src={`/style/images/template/lock.png`}/>
            <div className='lock-text'> Locked </div>
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
        {LootMapping.Data.LootItemMappings[i].alto_item.title}
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
        <BrainFuncItemsComponent/>
        <ExchangeButtonsComponent/>
        <AltoItemsComponent/>
      </div>
    );
  }
}
