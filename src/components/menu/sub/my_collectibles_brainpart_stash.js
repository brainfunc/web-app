import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

import StashBase from "./common/stash_base";

export default class BrainpartStash extends Component {

  constructor(props) {
    super(props);
  }

  getImageForBrainpartDetail() {
    return "/style/images/collectibles/brainparts/leftfrontal.png";
  }

  render() {
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
        <div className="brainpart_cards_container">
          <div className="brainpart_card_row">
            <div className="brainpart_card">
            </div>
            <div className="brainpart_card">
            </div>
            <div className="brainpart_card">
            </div>
            <div className="brainpart_card">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
