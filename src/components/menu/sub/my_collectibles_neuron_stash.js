import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

import StashBase from "./common/stash_base";

export default class NeuronStash extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='neuron_stash__container'>
        <div className="neuron_cards_container">
          <div className="neuron_card_row">
            <div className="neuron_card">
            </div>
            <div className="neuron_card">
            </div>
            <div className="neuron_card">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
