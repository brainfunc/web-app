import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/header';
import Footer from '../common/footer';

import * as Constants from '../../utils/data';

export default class Battleground extends Component {

  render() {
    return (
      <div className="battleground__container">
        <div className="header">
        <img src={`/style/images/menu/battles/battle_icon.png`}/>
        <div className='title'> Battleground </div>
        <img src={`/style/images/menu/battles/battle_icon.png`}/>
        </div>
      </div>
    );
  }

}
