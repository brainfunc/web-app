import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BattleCoreComponent extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='body'>
        <div className='battle_core'>
          <div className='battle-task'>
            Battle Task
          </div>
          <div className='part-chooser'>
            <div className='parts-container'>
              Parts Chooser
            </div>

            <div className='submit-container'>
              Submit
            </div>

          </div>
        </div>
      </div>
    );
  }
}
