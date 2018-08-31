import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import * as Tasks from '../../../utils/data/battles/tasks';

import BrainpartCard from '../my_collectibles/my_collectibles_brainpart_stash_brainpart_card';
export const BattleTaskComponent = function(props) {
  return(
    <div className='battle-task'>
      <div className='title'>
        Which parts could be involved in this activity?
      </div>
      <div className='task-image-container'>
        <img className='task-image' src={Tasks.Data.tasks[0].image}/>
      </div>
      <div className='task-title'>
        {Tasks.Data.tasks[0].title}
      </div>
      <div className='task-description'>
        {Tasks.Data.tasks[0].description}
      </div>
    </div>
  );
}

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
  // const start = (props.page-1) * 8;
  // const end = props.brainparts.length <
  // (start + 8) ? (props.brainparts.length) : (start + 8);
  // const lastRowNumber = end - start - 4;
  // console.log(start, end);
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(0, 4)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(4, 8)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(8, 12)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={2}
        brainparts={props.brainparts.slice(12, 14)}
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

  AddToSelectedBrainparts(part) {
    console.log("Selected", part);
    //console.log(`${index} selected`);
  }

  render(){
    return(
      <div className='body'>

        <div className='battle_core'>
          <BattleTaskComponent/>
          <div className='part-chooser'>

            <div className='title'>
              Choose Parts
            </div>
            <div className='subtitle'>
              {`These are the parts available in your stash. Click on a part to
                select it. Once you're confident about the combination you have
                selected, click on submit.
              `}
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
