import React,{Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="aae-section__container header">
        <div className='wrapper'>
          <div className='brand'>
            <img className='logo-image' src= {`../../style/images/template/brand_image.svg` }/>
            <img className='logo-text' src={`../../style/images/template/brand_text.svg`} />
            <div className='menu-item'>
              <img
                className='image-more'
                src={`../../style/images/template/more.svg`}
                onMouseOver={e => (e.currentTarget.src = "../../style/images/template/more_pink.svg")}
                onMouseOut={e => (e.currentTarget.src = "../../style/images/template/more.svg")}/>
            </div>
            <div className='menu-item'> FAQs </div>
            <div className='menu-item'> Team </div>
            <div className='menu-item'> Marketplace </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
