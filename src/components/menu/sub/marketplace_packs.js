import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed from "react-pose";

import * as Constants from '../../../utils/data';

// Animation related components
const Pack = posed.img({
  idle: { scale: 1 },
  hovered: { scale: 0.94 },
  transition: {
    duration: 600,
    ease: 'circInOut'
  }
})
export default class MarketplacePacks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovering: {
        cerebrum: false,
        cerebellum: false,
        brainstem: false,
        arterial: false
      }
    }
  }

  SetHovered(type, condition) {
    var activeState = {
      hovering: {
        cerebrum: false,
        cerebellum: false,
        brainstem: false,
        arterial: false
      }
    }
    activeState.hovering[type] = condition;
    this.setState(activeState);
  }

  render() {
    return (
      <div className='packs-wrapper'>
        <div className='pack yellow'>
          <div className='title'> Cerebrum </div>
          <Pack className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.cerebrum_pack}`}
            onClick={ () => this.props.SwitchSelectedPack("cerebrum")}
            pose = { this.state.hovering.cerebrum ? "hovered": "idle" }
            onMouseOver = { () =>  this.SetHovered("cerebrum", true) }
            onMouseLeave = { () => this.SetHovered("cerebrum", false) }/>
          <div className='pack_description'>
            <div className='number'> Neural Price </div>
            <div className='price'> 0.04 Eth</div>
          </div>
        </div>
        <div className='pack green'>
          <div className='title'> Cerebellum </div>
          <Pack className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.cerebellum_pack}`}
            onClick={ () => this.props.SwitchSelectedPack("cerebellum")}
            pose = { this.state.hovering.cerebellum ? "hovered": "idle" }
            onMouseOver = { () =>  this.SetHovered("cerebellum", true) }
            onMouseLeave = { () =>  this.SetHovered("cerebellum", false) }/>
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.03 Eth</div>
          </div>
        </div>
        <div className='pack blue'>
          <div className='title'> BrainStem </div>
          <Pack
            className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.brainstem_pack}`}
            onClick={ () => this.props.SwitchSelectedPack("brainstem")}
            pose = { this.state.hovering.brainstem ? "hovered": "idle" }
            onMouseOver = { () =>  this.SetHovered("brainstem", true) }
            onMouseLeave = { () =>  this.SetHovered("brainstem", false) } />
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.025 Eth</div>
          </div>
        </div>
        <div className='pack purple'>
          <div className='title'> Areterial </div>
          <Pack className='pack_image'
            src={`/style/images/${Constants.menuData.marketplace.images.arterial_pack}`}
            onClick={ () => this.props.SwitchSelectedPack("arterial")}
            pose = { this.state.hovering.arterial ? "hovered": "idle" }
            onMouseOver = { () =>  this.SetHovered("arterial", true) }
            onMouseLeave = { () =>  this.SetHovered("arterial", false) }/>
          <div className='pack_description'>
            <div className='number'> Neural Price</div>
            <div className='price'> 0.01 Eth</div>
          </div>
        </div>
      </div>
    );
  }

}
