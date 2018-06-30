import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SectionTypeOne from '../components/section-type-one';
import SectionTypeTwo from '../components/section-type-two';

import Header from '../components/header';
import Footer from '../containers/footer';

import * as Constants from '../utils/data';

export default class App extends Component {

  handleScrollToElement(event) {
    console.log(this.refs);
    const signupNode = ReactDOM.findDOMNode(this.refs.footer)

    var i = 10;
    var int = setInterval(function() {
      window.scrollTo(0, i);
      i += 20;
      if (i >= signupNode.offsetTop) clearInterval(int);
    }, 1);

  }

  render() {
    return (
      <div className="aae__container">
        <Header
          logoImage={Constants.headerData.logoImage}
          title={Constants.headerData.title}
          subTitle={Constants.headerData.subTitle}
          navigateFunction = {this.handleScrollToElement.bind(this)}/>
        <SectionTypeOne
          image={Constants.sectionData[0].image}
          titles={Constants.sectionData[0].titles}
          description={Constants.sectionData[0].description}/>
        <SectionTypeTwo
          images={Constants.sectionData[1].images}
          titles={Constants.sectionData[1].titles}
          descriptions={Constants.sectionData[1].descriptions}/>
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }
}
