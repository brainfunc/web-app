import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

import StashBase from "./common/stash_base";

export default class NeuronStash extends Component {

  constructor(props) {
    super(props);

    this.getNeuronImage = this.getNeuronImage.bind(this);
  }

  getNeuronImage() {
    return "/style/images/collectibles/neurons/cerebrum2.png";
  }

  render() {
    return (
      <div className='neuron_stash__container'>
      <div className="cards_container-4">
        <div className="card_row-4">
          <div className="card-4">
            <img className="image" src={this.getNeuronImage()}/>
            <div className="title">
              Frontal Lobe(Left)
            </div>
            <div className="description">
              Strength Level 2
            </div>
          </div>
          <div className="card-4">
            <img className="image" src={this.getNeuronImage()}/>
            <div className="title">
              Frontal Lobe(Right)
            </div>
            <div className="description">
              Strength Level 0
            </div>
          </div>
          <div className="card-4">
            <img className="image" src={this.getNeuronImage()}/>
            <div className="title">
              Temporal Lobe
            </div>
            <div className="description">
              Strength Level 5
            </div>
          </div>
          <div className="card-4">
            <img className="image" src={this.getNeuronImage()}/>
            <div className="title">
              Foccolonodular Lobe
            </div>
            <div className="description">
              Strength Level 3
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
