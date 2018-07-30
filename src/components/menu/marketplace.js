import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';
import MarketplaceDetails from './sub/marketplace_details';
import MarketplaceStash from './sub/marketplace_stash';
import MarketplacePacks from './sub/marketplace_packs';

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPack: "cerebrum"
    };
    this.SwitchSelectedPack = this.SwitchSelectedPack.bind(this);
  }



  SwitchSelectedPack = (packType) => {
    // console.log(packType);
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
          SwitchSelectedPack= {this.SwitchSelectedPack}/>
        <MarketplaceDetails
          buyQuantity={this.state.buyQuantity}
          type = {this.state.selectedPack}
          IncrementItem={this.IncrementItem}
          DecreaseItem={this.DecreaseItem}/>
        <MarketplaceStash
          buyQuantity= {this.state.buyQuantity}
          type = {this.state.selectedPack}/>
      </div>
    );
  }

}
