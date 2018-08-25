import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import BrainpartCard from "./my_collectibles_brainpart_stash_brainpart_card";

export const BrainpartCardsRow = function(props) {
  console.log(props);
  var cardsArr = []
  for(var i = 0; i < props["number"]; i++) {
    cardsArr.push(
      <BrainpartCard key={i}
      part={props.brainparts[i]}
      selectFunction={props.selectFunction}/>
    );
  }
  return (cardsArr);
}

export const BrainpartCardsComponent = function(props) {
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(0,4)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(4,8)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(8,12)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={2}
        brainparts={props.brainparts.slice(12,14)}
        selectFunction={props.selectFunction}/>
      </div>
    </div>
  );
}

export default class BrainpartStash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedBrainpart: Collectibles.Data.Brainparts[0],
      brainparts: Collectibles.Data.Brainparts
      .sort(Utils.GetSortOrder("strength"))
      .reverse()
    }

    this.SetSelectedBrainpart = this.SetSelectedBrainpart.bind(this);
  }

  SetSelectedBrainpart(part) {
    //console.log(part);
    this.setState({ selectedBrainpart: part })
  }

  render() {
    return (
      <div className='brainpart_stash__container'>
        <div className="brainpart_detail_container">
          <div className="image_container">
            <img src={this.state.selectedBrainpart.image}/>
            <button className="boost"
            onClick = {this.handleBoostClick}> Boost </button>
          </div>
          <div className="description_container">
            <div className="name">
              {this.state.selectedBrainpart.subcategory}
            </div>
            <div className="details">
              <div className="level">
                <div className="increase-level-txt">
                  Strength Level {this.state.selectedBrainpart.strength}
                </div>
                <div className="locked-status">
                  Locked
                </div>
              </div>
              <div className="text">
                {this.state.selectedBrainpart.description}
              </div>
            </div>
          </div>
        </div>
        <div className="title"> Brainpart Collectibles </div>
        <div className="subtitle">
          Click on the parts to see details above
        </div>
        <BrainpartCardsComponent
          brainparts={this.state.brainparts}
          selectFunction={this.SetSelectedBrainpart}/>
      </div>
    );
  }
}
