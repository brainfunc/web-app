import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SectionTypeLocked from '../components/common/section-type-locked';

import * as Constants from '../utils/data';

export default class Marketplace extends Component {

  render() {
    return (
      <div className="aae__container">
        <Header/>
        <SectionTypeLocked
          image={Constants.lockedSectionData.image}
          titles={Constants.lockedSectionData.titles}
          description={Constants.lockedSectionData.description}
        />
        <Footer
          ref= 'footer'
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }

}
