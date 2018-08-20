import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from '../../../utils/data';

import StashBase from "./common/stash_base";

export default class BrainpartStash extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='brainpart_stash__container'>
        Brainpart Stash
        <StashBase/>
      </div>
    );
  }
}
