import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyCollectibles extends Component {

  constructor(props) {
    super(props)
    this.getImageForProfile = this.getImageForProfile.bind(this);
    this.getWalletAddressForProfile = this.getWalletAddressForProfile.bind(this);
    this.getBalanceForProfile = this.getBalanceForProfile.bind(this);
  }

  getImageForProfile() {
    return "/style/images/template/logov3.5.png";
  }
  getWalletAddressForProfile(){
    return "0x75c088e1935468c0178b1e9733f250e9ad8d14f2"
  }
  getBalanceForProfile() {
    return "14.36 Ether";
  }

  render() {
    return (
      <div className="my_collectibles__container">
        <div className="profile_container">
          <div className="image_container"> <img src={this.getImageForProfile()}/> </div>
          <div className="wallet_container">
            <div className="title"> BrainFunc Wallet </div>
            <div className="wallet_address">
              Address:- {this.getWalletAddressForProfile()}
            </div>
            <div className="total_item_value">
              Total Value:- ~ {this.getBalanceForProfile()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
