import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

export default class MarketplacePacks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='packs-wrapper'>
        <div className='pack yellow'>
          <div className='title'> Cerebrum </div>
          <img className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}
            onClick={ () => {this.props.SwitchSelectedPack("cerebrum")} }/>
          <div className='pack_description'>
            <div className='number'> Neural Price </div>
            <div className='price'> 0.04 Eth</div>
          </div>
        </div>
        <div className='pack green'>
          <div className='title'> Cerebellum </div>
          <img className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.cerebellum_pack}`}
            onClick={ () => {this.props.SwitchSelectedPack("cerebellum")} }/>
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.03 Eth</div>
          </div>
        </div>
        <div className='pack blue'>
          <div className='title'> BrainStem </div>
          <img className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.brainstem_pack}`}
            onClick={ () => {this.props.SwitchSelectedPack("brainstem")} }/>
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.025 Eth</div>
          </div>
        </div>
        <div className='pack purple'>
          <div className='title'> Areterial </div>
          <img className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.arterial_pack}`}
            onClick={ () => {this.props.SwitchSelectedPack("arterial")} }/>
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.01 Eth</div>
          </div>
        </div>
      </div>
    );
  }

}
