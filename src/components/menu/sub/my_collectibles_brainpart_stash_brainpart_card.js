import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import StashBase from "./common/stash_base";

export default class BrainpartCard extends Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    console.log('Brain part image clicked!');
    this.props.selectFunction(this.props.part);
  }

  handleBoostClick() {
    console.log("Boost brainpart clicked!");
  }

  render() {
    var imageSrc = "";
    if (this.props.part.strength == 0) {
      imageSrc = "/style/images/collectibles/brainparts/lockedBrainpart5.png"
    } else { imageSrc = this.props.part.image }

    return(
      <div className="card-4">
        <img className="image"
        src={imageSrc}
        onClick={this.handleImageClick}/>
        <div className="title"> {this.props.part.subcategory} </div>
        <div className="description"> Strength Level {this.props.part.strength} </div>
      </div>
    );
  }
}
