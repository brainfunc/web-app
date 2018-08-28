import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import BrainpartCard from '../sub/my_collectibles_brainpart_stash_brainpart_card';

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
  const start = (props.page-1) * 8;
  const end = props.brainparts.length <
  (start + 8) ? (props.brainparts.length) : (start + 8);
  const lastRowNumber = end - start - 4;
  console.log(start, end);
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(start, start + 4)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={lastRowNumber}
        brainparts={props.brainparts.slice(start + 4, end)}
        selectFunction={props.selectFunction}/>
      </div>
    </div>
  );
}

export default class BattleCoreComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      partsSelected: [],
      selectedPage: 1,
      brainparts: Collectibles.Data.Brainparts
      .sort(Utils.GetSortOrder("strength"))
      .reverse()
    }

    this.AddToSelectedBrainparts = this.AddToSelectedBrainparts.bind(this);
  }

  AddToSelectedBrainparts(index) {
    console.log(`${index} selected`);
  }

  render(){
    return(
      <div className='body'>
        <div className='battle_core'>
          <div className='battle-task'>
            Battle Task
          </div>
          <div className='part-chooser'>
            <div className='title'>
              Choose Parts
            </div>
            <div className='parts-container'>
              <BrainpartCardsComponent
                page={this.state.selectedPage}
                brainparts={this.state.brainparts}
                selectFunction={this.AddToSelectedBrainparts}/>
            </div>

            <div className='submit-container'>
              <div className='footer-image-container left'>
                <img className='footer-image'
                src={`/style/images/icons/submission_footer.png`}/>
              </div>
              <div className='submit-button-wrapper'>
                <button className='submit-button'
                onClick= {() => this.props.EndBattleFunction()}>
                  Submit
                </button>
              </div>
              <div className='footer-image-container right'>
                <img className='footer-image'
                src={`/style/images/icons/submission_footer.png`}/>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
