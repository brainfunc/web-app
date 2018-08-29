import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';
import StashBase from "./common/stash_base";
import PagingBar from "./common/paging_bar";

import * as CONFIG from "../../../contracts/config";

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
  // console.log(props);
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
  const start = (props.page-1) * 8;
  const end = props.neurons.length <
  (start + 8) ? (props.neurons.length) : (start + 8);
  const lastRowNumber = end - start - 4;
  // console.log(start, end);
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <NeuronCardsRow number={4}
        neurons={props.neurons.slice(start,start + 4)}/>
      </div>
      <div className="card_row-4">
        <NeuronCardsRow number={lastRowNumber}
        neurons={props.neurons.slice(start + 4, end)}/>
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
      .reverse(),
      itemsOwned:[]
    }

    this.SetItemsOwned = this.SetItemsOwned.bind(this);
    this.SetSelectedPage = this.SetSelectedPage.bind(this);

    this.FetchTotalSupply = this.FetchTotalSupply.bind(this);
    this.FetchItemsOwned = this.FetchItemsOwned.bind(this);
    this.FetchItemOwners = this.FetchItemOwners.bind(this);
    this.FetchNeuronsOwnedByUser = this.FetchNeuronsOwnedByUser.bind(this);
  }

  componentDidMount() {
    this.FetchNeuronsOwnedByUser()
  }

  FetchTotalSupply(neuronContractInstance, callback) {
    neuronContractInstance.totalSupply(function(err, res) {
      if(err) { callback(err, null); return;}
      const totalSupply = res.c[0];
      callback(null, totalSupply);
    });
  }

  FetchItemsOwned(neuronContractInstance, totalSupply) {
    console.log("Fetching Items Owned by User...");
    console.log("Total Supply", totalSupply);

    var neuronOwnershipMap = [];
    for(var i = 0;i < totalSupply; i++) {
      neuronOwnershipMap.push("");
    }

    this.FetchItemOwners(
      neuronOwnershipMap, neuronContractInstance, totalSupply);

    console.log(neuronOwnershipMap);
  }

  FetchItemOwners(
    neuronOwnershipMap, neuronContractInstance, totalSupply) {
    const {web3} = window;
    var counter = 0;
    var instance = this;
    // Usage of let is important here!
    for(let i = 0; i < totalSupply; i++){
      neuronContractInstance.ownerOf(i,
        function(err, res) {
          if(err) {console.log(err); return;}
          console.log("Owner", i, res);
          neuronOwnershipMap[i] = res;
          counter += 1;
          if(counter == totalSupply) {
            instance.SetItemsOwned(
              neuronOwnershipMap, web3.eth.defaultAccount)
          }
        }// end of callback
      );//end of ownerOf
    } // end of for loop
  }

  FetchNeuronsOwnedByUser() {
    console.log("Fetching Neurons...");
    // Fetch neurons owned using smart contracts
    // use total supply and owner of
    const {web3} = window;
    const neuronContract = web3.eth.contract(
      CONFIG.CONTRACTS.NEURON.ABI);
    const neuronContractInstance = neuronContract.at(
      CONFIG.CONTRACTS.NEURON.ADDRESS);
    // console.log(neuronContractInstance);
    // console.log(web3.eth.defaultAccount);

    var fetchItemsOwnedCallback = function(err, totalSupply) {
      if(err) { console.log(err); return; }
      // console.log("Total Supply", totalSupply);
      this.FetchItemsOwned(neuronContractInstance, totalSupply);
    }
    fetchItemsOwnedCallback = fetchItemsOwnedCallback.bind(this);

    this.FetchTotalSupply(neuronContractInstance,fetchItemsOwnedCallback);
    // set the state
  }

  SetItemsOwned(map, accountID) {
    // Logic to compute items owned by current address
    var itemsOwned = [];
    for(var i = 0; i < map.length; i++) {
      if(map[i] == accountID) {
        itemsOwned.push(i);
      }
    }
    this.setState({itemsOwned});
  }

  SetSelectedPage(page) {
    console.log("Page Switched!", page);
    this.setState({ selectedPage: page })
  }

  render() {
    // Logging the state
    console.log(this.state);
    return (
      <div className='neuron_stash__container'>
        <div className='title'> Neuron Collectibles </div>
        <div className='subtitle'>
          Here are the neuron collectibles that you own
        </div>
        <NeuronCardsComponent
        neurons={this.state.neurons}
        page={this.state.selectedPage}/>
        <PagingBar selectFunction={this.SetSelectedPage}/>
      </div>
    );
  }
}
