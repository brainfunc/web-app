import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';

export default class Marketplace extends Component {

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
      </div>
    );
  }

}
