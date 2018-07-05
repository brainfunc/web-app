import React,{Component} from 'react';

class Footer extends Component {


  render() {
    return (
      <div>
        <div className='aae-section__container footer'>
          <div className='sub-section footer'>
            <ul>
              <li className='list-heading'> About </li>
              <li><a href=''> White Paper </a></li>
              <li><a href=''> Team </a></li>
              <li><a href=''> Blog </a></li>
              <li><a href=''> Jobs </a></li>
              <li><a href=''> FAQs </a></li>
              <li><a href=''> Contact </a></li>
            </ul>
          </div>
          <div className='sub-section footer'>
            <ul>
              <li className='list-heading'> Community </li>
              <li><a href=''> Facebook </a></li>
              <li><a href=''> Twitter </a></li>
              <li><a href=''> Telegram </a></li>
              <li><a href=''> Instagram </a></li>
              <li><a href=''> Reddit </a></li>
              <li><a href=''> Youtube </a></li>
              <li><a href=''> Slack </a></li>
              <li><a href=''> Linkedin </a></li>
            </ul>
          </div>
          <div className='sub-section footer'>
          <ul>
            <li className='list-heading'> Gameplay </li>
            <li><a href=''> Concept </a></li>
            <li><a href=''> Metamask </a></li>
            <li><a href=''> Battles </a></li>
            <li><a href=''> Marketplace </a></li>
          </ul>
          </div>
          <div className='sub-section footer'>
            <div className='tech-message-wrapper'>
              <div className='tech-message'> Powered Using </div>
            </div>
            <div className='tech-image-wrapper'>
              <img className='tech-image' src={`../../style/images/template/react_gray.svg`}/>
              <img className='tech-image' src={`../../style/images/template/node_gray.svg`}/>
              <img className='tech-image' src={`../../style/images/template/solidity_gray.svg`}/>
            </div>
          </div>
        </div>
        <div className='aae-section__container notice'>
          <div className='divider'></div>
          <div className='sub-section notice'>
            © Tejas Nikumbh 2018. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
