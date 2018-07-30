import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';
import MarketplaceDetails from './sub/marketplace_details';
import MarketplaceStash from './sub/marketplace_stash';
import MarketplacePacks from './sub/marketplace_packs';

const MAX_BUY_QUANTITY = 100;
const MIN_BUY_QUANTITY = 0;

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyQuantity:0,
      packType: "cerebrum"
    };
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    this.SwitchSelectedPack = this.SwitchSelectedPack.bind(this);
  }

  IncrementItem = () => {
    if(this.state.buyQuantity < MAX_BUY_QUANTITY) {
      this.setState({ buyQuantity: this.state.buyQuantity + 1 });
    }
  }
  DecreaseItem = () => {
    if(this.state.buyQuantity > MIN_BUY_QUANTITY) {
      this.setState({ buyQuantity: this.state.buyQuantity - 1 });
    }
  }

  SwitchSelectedPack = (packType) => {
    console.log(packType);
    this.setState({ selectedPack: packType });
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
        <MarketplacePacks
          selectedPack = {this.state.selectedPack}
          SwitchSelectedPack= {this.SwitchSelectedPack}/>
        <MarketplaceDetails
          buyQuantity={this.state.buyQuantity}
          selectedPack = {this.state.selectedPack}
          IncrementItem={this.IncrementItem}
          DecreaseItem={this.DecreaseItem}/>
        <MarketplaceStash
          buyQuantity= {this.state.buyQuantity}
          selectedPack = {this.state.selectedPack}/>
      </div>
    );
  }

}
