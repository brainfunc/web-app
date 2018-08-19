import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

const MAX_BUY_QUANTITY = 100;
const MIN_BUY_QUANTITY = 0;

export default class MarketplaceDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buyQty: 0
    }

    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
  }

  IncrementItem = () => {
    if(this.state.buyQty < MAX_BUY_QUANTITY) {
      this.setState({ buyQty: this.state.buyQty + 1 });
      this.props.UpdateRootState(this.state.buyQty + 1);
    }
  }

  DecreaseItem = () => {
    if(this.state.buyQty > MIN_BUY_QUANTITY) {
      this.setState({ buyQty: this.state.buyQty - 1 });
      this.props.UpdateRootState(this.state.buyQty - 1);
    }
  }

  render() {
    return (
      <div className='details-wrapper'>
        <div className='details-image-wrapper'>
          <img className='details-image'
          src={`/style/images/${Constants.menuData.marketplace.images.pack[this.props.type]}`}/>
        </div>
        <div className='details-description-wrapper'>
          <div className='title'> {Constants.menuData.marketplace.details[this.props.type].title} </div>
          <div className='subtitle'> {Constants.menuData.marketplace.details[this.props.type].subtitle} </div>
          <div className='description'>
            {Constants.menuData.marketplace.details[this.props.type].description}
          </div>
          <div className='price-wrapper'>
            <div className='quantity'>
              <button className='qty decrement'
                onClick={this.DecreaseItem}> - </button>
              <div className='qty number'> {this.state.buyQty} </div>
              <button className='qty increment'
                onClick={this.IncrementItem}> + </button>
            </div>
            <div className='total-price'>
              Total Price:
              {` ${Number(Constants.menuData.marketplace.details[this.props.type].price
                * this.state.buyQty).toFixed(2)}`}
              Eth
            </div>
          </div>
          <div className='buy-wrapper'>
            <button className='buy'
            onClick={this.props.BuyNeuronsClicked}> Buy Neurons </button>
          </div>
        </div>
      </div>
    );
  }

}
