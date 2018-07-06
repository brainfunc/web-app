import React,{Component} from 'react';
import {Links} from '../constants/constants';

class Header extends Component {
  render() {
    return (
      <div className="aae-section__container header">
        <div className='wrapper'>
          <div className='brand'>
          <a href='/' style={{textDecoration:'none'}}>
            <img className='logo-image' src= {`../../style/images/template/brand_image.svg` }/>
            <img className='logo-text' src={`../../style/images/template/brand_text.svg`} />
          </a>
            <div className='menu-item more'>
              <img
                className='image-more'
                src={`../../style/images/template/more.svg`}
                onMouseOver={e => (e.currentTarget.src = "../../style/images/template/more_pink.svg")}
                onMouseOut={e => (e.currentTarget.src = "../../style/images/template/more.svg")}/>
            </div>

            <div className='menu-item'><a href={Links.faqs}>FAQs </a></div>
            <div className='menu-item'><a href={Links.team}> Team </a></div>
            <div className='menu-item'><a href={Links.marketplace}> Marketplace </a></div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
