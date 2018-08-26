import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';
import StashBase from "./common/stash_base";
import PagingBar from "./common/paging_bar";

export const NeuronCard = function(props) {
  var imageSrc = "";
  if (props.quantity == "0") {
    imageSrc = "/style/images/collectibles/neurons/unavailableNeuron.png"
  } else { imageSrc = props.image; }
  return (
    <div className="card-4">
      <img className="image"
      src={imageSrc}/>
      <div className="title">{props.subcategory}</div>
      <div className="description">
        <div className="category"> {props.category} </div>
        <div className="quantity"> {props.quantity} </div>
      </div>
    </div>
  );
}

export const NeuronCardsRow = function(props) {
  console.log(props);
  var cardsArr = []
  for(var i = 0; i < props["number"]; i++) {
    cardsArr.push(
      <NeuronCard key={i}
      category={props.neurons[i].category}
      subcategory={props.neurons[i].subcategory}
      quantity={props.neurons[i].quantity}
      image={props.neurons[i].image}/>
    );
  }
  return (cardsArr);
}

export const NeuronCardsComponent = function(props) {
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <NeuronCardsRow number={4}
        neurons={props.neurons.slice(0,4)}/>
      </div>
      <div className="card_row-4">
        <NeuronCardsRow number={4}
        neurons={props.neurons.slice(4,8)}/>
      </div>
      <div className="card_row-4">
        <NeuronCardsRow number={4}
        neurons={props.neurons.slice(8,12)}/>
      </div>
      <div className="card_row-4">
        <NeuronCardsRow number={2}
        neurons={props.neurons.slice(12,14)}/>
      </div>
    </div>
  );
}

export default class NeuronStash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1,
      neurons: Collectibles.Data.Neurons
      .sort(Utils.GetSortOrder("quantity"))
      .reverse()
    }

    this.SetSelectedPage = this.SetSelectedPage.bind(this);
  }

  SetSelectedPage(page) {
    console.log("Page Switched!", page);
    this.setState({ selectedPage: page })
  }

  render() {
    return (
      <div className='neuron_stash__container'>
        <div className='title'> Neuron Collectibles </div>
        <div className='subtitle'>
          Here are the neuron collectibles that you own
        </div>
        <NeuronCardsComponent neurons={this.state.neurons}/>
        <PagingBar selectFunction={this.SetSelectedPage}/>
      </div>
    );
  }
}
