import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import StashBase from "./common/stash_base";

export const BrainpartCard = function(props) {
  // brainparts/lockedBrainpart3.png
  var imageSrc = "";
  if (props.strength == 0) {
    imageSrc = "/style/images/collectibles/brainparts/lockedBrainpart5.png"
  } else { imageSrc = props.image }

  return(
    <div className="card-4">
      <img className="image" src={imageSrc}/>
      <div className="title"> {props.subcategory} </div>
      <div className="description"> Strength Level {props.strength} </div>
    </div>
  );
}


export const BrainpartCardsRow = function(props) {
  console.log(props);
  var cardsArr = []
  for(var i = 0; i < props["number"]; i++) {
    cardsArr.push(
      <BrainpartCard key={i}
      category={props.brainparts[i].category}
      subcategory={props.brainparts[i].subcategory}
      strength={props.brainparts[i].strength}
      image={props.brainparts[i].image}/>
    );
  }
  return (cardsArr);
}

export const BrainpartCardsComponent = function(props) {
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(0,4)}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(4,8)}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(8,12)}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={2}
        brainparts={props.brainparts.slice(12,14)}/>
      </div>
    </div>
  );
}

export default class BrainpartStash extends Component {

  constructor(props) {
    super(props);

    this.sortBrainPartsByStrength = this.sortBrainPartsByStrength.bind(this);
  }

  getImageForBrainpartDetail() {
    return "/style/images/collectibles/brainparts/leftfrontal.png";
  }

  sortBrainPartsByStrength(brainpartsArray) {
    return brainpartsArray.sort(Utils.GetSortOrder("strength")).reverse();
  }

  render() {
    const brainparts = this.sortBrainPartsByStrength(Collectibles.Data.Brainparts);
    return (
      <div className='brainpart_stash__container'>
        <div className="brainpart_detail_container">
          <div className="image_container">
            <img src={this.getImageForBrainpartDetail()}/>
          </div>
          <div className="description_container">
            <div className="name"> Frontal Lobe (Left)</div>
            <div className="details">
              <div className="level">
                <div className="increase-level-txt">
                  Strength Level 3
                </div>
                <div className="locked-status">
                  Locked
                </div>
              </div>
              <div className="text">
                The Frontal Lobe performs core cognition functions.It is the most
                important part in the Cerebrum, that controls important cognitive
                skills in humans, such as emotional expression, problem solving,
                memory, language, judgment, and sexual behaviors. The left part
                is associated with logical cognition.
              </div>
            </div>
          </div>
        </div>
        <BrainpartCardsComponent brainparts={brainparts}/>
      </div>
    );
  }
}
