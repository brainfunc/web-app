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
          {`This is the BrainFunc Exchange. It is meant to be a place where you can
          use your constructed brainparts (in game) and trade them for collectibles
          from other games. Exciting isn't it? Now you can use your brainparts not
          just within BrainFunc but in other games as well. For now, we support the
          alto cryptochallenge loot (5 items, exchangeable via associated brain parts
          of strength 1) as shown below. Click on exchange for a transfer to take
          place. It's as easy as that!`}
        </div>
        <ItemExchanger/>
      </div>
    );
  }
}
