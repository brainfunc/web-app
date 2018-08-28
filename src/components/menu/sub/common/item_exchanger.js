import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        BrainFunc Item
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
        Alto Item
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
