import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const ProgressBar = function(props) {
  return(
    <div className='progress-container'>
      <div className='progress-base'>
        <div className='progress-previous'>
          <div className='progress-current'>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PartResultCard = function(props) {
  return (
    <div className='part-result-card'>
      <div className='brainpart-image-container'>
        <img className='brainpart' src={`/style/images/collectibles/brainparts/medulla.png`}/>
        <img className='result' src={`/style/images/icons/tick.png`}/>
      </div>
      <div className='result-description-container'>
        <div className='title'>Medulla </div>
        <div className='subtitle'>Brainstem • Strength Level 1</div>
        <div className='text'>{`Congrats! You chose this part correctly. You have
          strengthened your brainpart. You can see the progress indicator until
          you level up to the next strength level to your right. `}</div>
      </div>
      <div className='level-up-details-container'>
        <img className='stars' src={`/style/images/icons/stars.png`}/>
        <ProgressBar/>
      </div>
    </div>
  );
}

export default class ResultsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='body'>
        <div className='results'>
          <div className='heading'> Results </div>
          <div className='description-wrapper'>
            <div className='description'>
              Overall Time Taken - 03:34 minutes
            </div>
            <div className='description'>
              Overall Percentile Score - 92.45%
            </div>
          </div>
          <div className='subheading'> Details </div>
          <div className='partwise-results-container'>
            <PartResultCard/>
          </div>
        </div>
      </div>
    );
  }
}
