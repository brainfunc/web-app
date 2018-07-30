import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

export default class MarketplaceDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='details-wrapper'>
        <div className='details-image-wrapper'>
          <img className='details-image'
          src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
        </div>
        <div className='details-description-wrapper'>
          <div className='title'> {Constants.menuData.marketplace.details.cerebrum.title} </div>
          <div className='subtitle'> {Constants.menuData.marketplace.details.cerebrum.subtitle} </div>
          <div className='description'>
            {Constants.menuData.marketplace.details.cerebrum.description}
          </div>
          <div className='price-wrapper'>
            <div className='quantity'>
              <button className='qty decrement'
              onClick={this.props.DecreaseItem}> - </button>
              <div className='qty number'> {this.props.buyQuantity} </div>
              <button className='qty increment'
              onClick={this.props.IncrementItem}> + </button>
            </div>
            <div className='total-price'>
              Total Price:
              {` ${Number(Constants.menuData.marketplace.details.cerebrum.price
                * this.props.buyQuantity).toFixed(2)}`}
              Eth
            </div>
          </div>
          <div className='buy-wrapper'>
            <button className='buy'> Buy Neurons </button>
          </div>
        </div>
      </div>
    );
  }

}
