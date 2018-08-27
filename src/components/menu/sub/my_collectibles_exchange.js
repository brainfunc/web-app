import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';
import ItemExchanger from './my_collectibles_exchange_item_exchanger';

export default class Exchange extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='exchange__container'>
        <div className='title'> What is this? </div>
        <div className='description'>
          {`The BrainFunc Game Universe is meant to be a place where you can use
          collectible items earned in other games inside BrainFunc. You can now
          create Brainparts using collectibles earned in other games. Exciting isn't it?
          We know, we're excited too! For now, we support the Alto Cryptochallenge Loot
          (5 items, can be used to construct or boost associated brain parts). Select the
          Alto Challenge Loot from below to get started!`}
        </div>
        <ItemExchanger/>
      </div>
    );
  }
}
