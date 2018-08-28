import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import InstructionsComponent from './battleground/instructions';
import BattleCoreComponent from './battleground/battle_core';
import ResultsComponent from './battleground/results';

import * as Constants from '../../utils/data';
import * as Instructions from '../../utils/data/battles/instructions';

export default class Battleground extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentBattleState: "ready"
    }

    this.StartBattle = this.StartBattle.bind(this);
    this.EndBattle = this.EndBattle.bind(this);
    this.StartNewBattle = this.StartNewBattle.bind(this);

    this.RenderBody = this.RenderBody.bind(this);
  }

  StartBattle() {
    this.setState({currentBattleState: "started"});
  }

  EndBattle() {
    this.setState({currentBattleState: "ended"});
  }

  StartNewBattle() {
    this.setState({currentBattleState: "ready"});
  }

  RenderBody() {
    if(this.state.currentBattleState == "ready") {
      return(<InstructionsComponent
              StartBattleFunction={this.StartBattle}/>)
    } else  if(this.state.currentBattleState == "started") {
      return(<BattleCoreComponent
              EndBattleFunction={this.EndBattle}/>);
    } else if(this.state.currentBattleState == "ended") {
      return(<ResultsComponent
              StartNewBattleFunction={this.StartNewBattle}/>);
    }
  }

  render() {
    return (
      <div className="battleground__container">
        <div className="header">
          <img src={`/style/images/menu/battles/battle_icon.png`}/>
          <div className='title'> Battleground </div>
          <img src={`/style/images/menu/battles/battle_icon.png`}/>
        </div>
        {this.RenderBody()}
      </div>
    );
  }

}
