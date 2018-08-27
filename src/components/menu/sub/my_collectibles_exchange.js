import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';
import GameStashCard from './common/game_stash_card';

export default class Exchange extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCard: "none"
    }

    this.SelectCard = this.SelectCard.bind(this);
  }

  SelectCard() {
    this.setState({ selectedCard: "alto" });
  }

  render() {
    return (
      <div className='exchange__container'>
        <div className='title'> What is this? </div>
        <div className='description'>
          {`The BrainFunc Game Universe is meant to be a place where you can use
          collectible items earned in other games inside BrainFunc. Right now, you can 
          create Brainparts using collectibles earned in other games. Exciting isn't it?
          We know, we're excited too! For now, we support the Alto Cryptochallenge Loot
          (5 items, can be used to construct or boost associated brain parts), but plan
          to support other games in the future! Select the Alto Challenge Loot from
          below to get started.`}
        </div>
        <div className='game_stash__container'>
          <GameStashCard SelectCard={this.SelectCard}/>
        </div>
      </div>
    );
  }
}
