import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';
const MAX_BUY_QUANTITY = 100;
const MIN_BUY_QUANTITY = 0;
export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buy_quantity:0,
    };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
  }

  IncrementItem = () => {
    if(this.state.buy_quantity < MAX_BUY_QUANTITY) {
      this.setState({ buy_quantity: this.state.buy_quantity + 1 });
    }
  }
  DecreaseItem = () => {
    if(this.state.buy_quantity > MIN_BUY_QUANTITY) {
      this.setState({ buy_quantity: this.state.buy_quantity - 1 });
    }
  }

  render() {
    return (
      <div className="marketplace__container">
        <div className='heading'> Neuron Packs</div>
        <div className='description-wrapper'>
          <div className='description'>
            The neuron packs give you the ability to purchase a set of neurons.
            These neurons will be a random combination of the 13 types available,
            with any number of any type available. They will help you construct
            your brain parts required in battles. Buying larger quantitites of
            neurons mean you can buy them at a discounted price!
          </div>
        </div>
        <div className='packs-wrapper'>
          <div className='pack yellow'>
            <div className='title'> Cerebrum </div>
            <img className='pack_image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
            <div className='pack_description'>
              <div className='number'> Neural Price </div>
              <div className='price'> 0.04 Eth</div>
            </div>
          </div>
          <div className='pack green'>
            <div className='title'> Cerebellum </div>
            <img className='pack_image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebellum_pack}`}/>
            <div className='pack_description'>
              <div className='number'> Neural Price</div>
              <div className='price'> 0.03 Eth</div>
            </div>
          </div>
          <div className='pack blue'>
            <div className='title'> BrainStem </div>
            <img className='pack_image'
              src={`/style/images/${Constants.menuData.marketplace.images.brainstem_pack}`}/>
            <div className='pack_description'>
              <div className='number'> Neural Price</div>
              <div className='price'> 0.025 Eth</div>
            </div>
          </div>
          <div className='pack purple'>
            <div className='title'> Areterial </div>
            <img className='pack_image'
              src={`/style/images/${Constants.menuData.marketplace.images.arterial_pack}`}/>
            <div className='pack_description'>
              <div className='number'> Neural Price</div>
              <div className='price'> 0.01 Eth</div>
            </div>
          </div>
        </div>
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
                onClick={this.DecreaseItem}> - </button>
                <div className='qty number'> {this.state.buy_quantity} </div>
                <button className='qty increment'
                onClick={this.IncrementItem}> + </button>
              </div>
              <div className='total-price'>
                Total Price:
                {` ${Number(Constants.menuData.marketplace.details.cerebrum.price
                  * this.state.buy_quantity).toFixed(2)}`}
                Eth
              </div>
            </div>
            <div className='buy-wrapper'>
              <button className='buy'> Buy Neurons </button>
            </div>
          </div>
        </div>
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
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
              <div className='part-qty'></div>
            </div>
            <div className='part'>
              <img className='part-image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
              <div className='part-qty'></div>
            </div>
            <div className='part'>
              <img className='part-image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
              <div className='part-qty'></div>
            </div>
            <div className='part'>
              <img className='part-image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
              <div className='part-qty'></div>
            </div>
            <div className='part'>
              <img className='part-image'
              src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}/>
              <div className='part-qty'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
