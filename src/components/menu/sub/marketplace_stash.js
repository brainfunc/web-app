import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

export default class MarketplaceStash extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='stash-wrapper'>
        <div className='title-wrapper'>
          <div className='lock left'>
            <img src={`/style/images/${Constants.templateData.images.lock}`}/>
          </div>
          <div className='title'> Buy Neurons to Reveal</div>
          <div className='lock right'>
            <img src={`/style/images/${Constants.templateData.images.lock}`}/>
          </div>

        </div>
        <div className='parts-wrapper'>
          <div className='part'>
            <img className='part-image'
            src={`/style/images/${Constants.menuData.marketplace.images.pack.cerebrum}`}/>
            <div className='part-qty'></div>
          </div>
          <div className='part'>
            <img className='part-image'
            src={`/style/images/${Constants.menuData.marketplace.images.pack.cerebrum}`}/>
            <div className='part-qty'></div>
          </div>
          <div className='part'>
            <img className='part-image'
            src={`/style/images/${Constants.menuData.marketplace.images.pack.cerebrum}`}/>
            <div className='part-qty'></div>
          </div>
          <div className='part'>
            <img className='part-image'
            src={`/style/images/${Constants.menuData.marketplace.images.pack.cerebrum}`}/>
            <div className='part-qty'></div>
          </div>
          <div className='part'>
            <img className='part-image'
            src={`/style/images/${Constants.menuData.marketplace.images.pack.cerebrum}`}/>
            <div className='part-qty'></div>
          </div>
        </div>
      </div>
    );
  }

}
