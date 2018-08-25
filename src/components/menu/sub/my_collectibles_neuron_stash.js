import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

import StashBase from "./common/stash_base";

export const NeuronCard = function(props) {
  return (
    <div className="card-4">
      <img className="image"
      src={"/style/images/collectibles/neurons/cerebrum2.png"}/>
      <div className="title">
        Frontal Lobe(Left)
      </div>
      <div className="description">
        <div className="category"> Cerebrum </div>
        <div className="quantity"> 34 </div>
      </div>
    </div>
  );
}

export const NeuronCards = function(props) {
  var cardsArr = []
  for(var i = 0; i < props["number"]; i++) {
    cardsArr.push(<NeuronCard key={i}/>);
  }
  return (cardsArr);
}

export default class NeuronStash extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='neuron_stash__container'>
      <div className="cards_container-4">
        <div className="card_row-4">
          <NeuronCards number={4}/>
        </div>
        <div className="card_row-4">
          <NeuronCards number={4}/>
        </div>
        <div className="card_row-4">
          <NeuronCards number={4}/>
        </div>
        <div className="card_row-4">
          <NeuronCards number={4}/>
        </div>
        
      </div>
      </div>
    );
  }
}
