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
    var imageSrc, boostOrUnlockButtonText,description,
    lockLabelClass, lockLabelDivText;
    if (this.state.selectedBrainpart.strength == "0") {
      imageSrc = "/style/images/collectibles/brainparts/lockedBrainpart5.png";
      boostOrUnlockButtonText = "Construct";
      lockLabelClass = "locked";
      lockLabelDivText = "Locked";
      description = Collectibles.GeneralData.Brainparts.lockedDescription;
    } else {
      imageSrc = this.state.selectedBrainpart.image;
      boostOrUnlockButtonText = "Boost";
      lockLabelClass = "owned";
      lockLabelDivText = "Owned";
      description = this.state.selectedBrainpart.description;
    }

    return (
      <div className='brainpart_stash__container'>
        <div className="brainpart_detail_container">
          <div className="image_container">
            <img src={imageSrc}/>
            <button className="boost"
            onClick = {this.handleBoostClick}> {boostOrUnlockButtonText} </button>
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
                <div className={`${lockLabelClass}`}>
                  {lockLabelDivText}
                </div>
              </div>
              <div className="text">
                {description}
              </div>
              <div className="neurons">
                <img src="/style/images/icons/neurons_qty.png"/>
                <div className="lbl"> Neurons Available</div>
                <div className="qty">
                  You have {this.state.selectedBrainpart.neuronQuantity} neurons of this type 
                </div>
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
