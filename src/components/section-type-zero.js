import React,{Component} from 'react';
import {connect} from 'react-redux';

class SectionTypeZero extends Component {

  render() {
    return (
      <div className='aae-section__container section-type-zero'>
        <div className='wrapper'>
          <img className='feature__image card' src={`../../style/images/${this.props.logoImage}`}/>
        </div>
        <div className='wrapper'>
          <div className='title'> {this.props.title} </div>
          <div className='sub-title'> {this.props.subTitle} </div>
          <button
          className='signup-button'
          onClick = {this.props.navigateFunction}>
            Get Started
          </button>
        </div>
      </div>
    );
  }
}

export default SectionTypeZero;
