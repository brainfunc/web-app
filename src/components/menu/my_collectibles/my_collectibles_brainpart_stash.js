import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Collectibles from '../../../utils/data/collectibles';
import * as Utils from '../../../utils/utils';

import BrainpartCard from "./my_collectibles_brainpart_stash_brainpart_card";
import PagingBar from "./common/paging_bar";

import * as CONFIG from "../../../contracts/config";

export const BrainpartCardsRow = function(props) {
  // console.log(props);
  var cardsArr = []
  for(var i = 0; i < props["number"]; i++) {
    cardsArr.push(
      <BrainpartCard key={i}
      part={props.brainparts[i]}
      selectFunction={props.selectFunction}/>
    );
  }
  return (cardsArr);
}

export const BrainpartCardsComponent = function(props) {
  const start = (props.page-1) * 8;
  const end = props.brainparts.length <
  (start + 8) ? (props.brainparts.length) : (start + 8);
  const lastRowNumber = end - start - 4;
  console.log(start, end);
  return(
    <div className="cards_container-4">
      <div className="card_row-4">
        <BrainpartCardsRow number={4}
        brainparts={props.brainparts.slice(start, start + 4)}
        selectFunction={props.selectFunction}/>
      </div>
      <div className="card_row-4">
        <BrainpartCardsRow number={lastRowNumber}
        brainparts={props.brainparts.slice(start + 4, end)}
        selectFunction={props.selectFunction}/>
      </div>
    </div>
  );
}


export default class BrainpartStash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1,
      selectedBrainpart: Collectibles.Data.Brainparts[0],
      brainparts: Collectibles.Data.Brainparts
    }

    this.SetSelectedBrainpart = this.SetSelectedBrainpart.bind(this);
    this.SetSelectedPage = this.SetSelectedPage.bind(this);

    this.FetchTotalSupply = this.FetchTotalSupply.bind(this);
    this.FetchItemsOwned = this.FetchItemsOwned.bind(this);
    this.FetchItemOwners = this.FetchItemOwners.bind(this);
    this.FetchItemTokenIds = this.FetchItemTokenIds.bind(this);
    this.FetchItemsData = this.FetchItemsData.bind(this);

    this.FetchAndSetBrainparts = this.FetchAndSetBrainparts.bind(this);

  }

  componentDidMount() {
    if(!this.props.isBrainpartsSet){
      this.FetchAndSetBrainparts()
    }
  }

  FetchAndSetBrainparts() {
    console.log("Loading...");
    // Fetch Brainparts owned using smart contracts
    // use total supply and owner of
    const {web3} = window;
    const brainpartContract = web3.eth.contract(
      CONFIG.CONTRACTS.BRAINPART.ABI);
    const brainpartContractInstance = brainpartContract.at(
      CONFIG.CONTRACTS.BRAINPART.ADDRESS);
    // console.log(brainpartContractInstance);
    // console.log(web3.eth.defaultAccount);

    var fetchItemsOwnedCallback = function(err, totalSupply) {
      if(err) { console.log(err); console.log("Loading failed.") ;return; }
      // console.log("Total Supply", totalSupply);
      this.FetchItemsOwned(brainpartContractInstance, totalSupply);
    }
    fetchItemsOwnedCallback = fetchItemsOwnedCallback.bind(this);

    this.FetchTotalSupply(brainpartContractInstance,fetchItemsOwnedCallback);
    // set the state
  }

  FetchTotalSupply(brainpartContractInstance, callback) {
    brainpartContractInstance.totalSupply(function(err, res) {
      if(err) { callback(err, null); console.log("Loading failed."); return;}
      const totalSupply = res.c[0];
      callback(null, totalSupply);
    });
  }

  FetchItemsOwned(brainpartContractInstance, totalSupply) {
    // console.log("Fetching Items Owned by User...");
    // console.log("Total Supply", totalSupply);

    var brainpartOwnershipMap = [];
    for(var i = 0;i < totalSupply; i++) {
      brainpartOwnershipMap.push("");
    }

    this.FetchItemOwners(
      brainpartOwnershipMap, brainpartContractInstance, totalSupply);

    //console.log(brainpartOwnershipMap);
  }

  FetchItemOwners(
    brainpartOwnershipMap, brainpartContractInstance, totalSupply) {
    const {web3} = window;
    var counter = 0;
    var instance = this;
    // Usage of let is important here!
    for(let i = 0; i < totalSupply; i++){
      brainpartContractInstance.ownerOf(i,
        function(err, res) {
          if(err) {console.log(err); console.log("Loading failed."); return;}
          //console.log("Owner", i, res);
          brainpartOwnershipMap[i] = res;
          counter += 1;
          if(counter == totalSupply) {
            instance.FetchItemTokenIds(
              brainpartOwnershipMap, web3.eth.defaultAccount, brainpartContractInstance)
          }
        }// end of callback
      );//end of ownerOf
    } // end of for loop
  }

  FetchItemTokenIds(map, accountID, brainpartContractInstance) {
    // Logic to compute items owned by current address
    var itemTokenIds = [];
    for(var i = 0; i < map.length; i++) {
      if(map[i] == accountID) {
        itemTokenIds.push(i);
      }
    }
    if(itemTokenIds.length == 0) { console.log("Loading finished!"); return; }
    this.FetchItemsData(itemTokenIds, brainpartContractInstance);
  }

  FetchItemsData(brainpartTokenIds, brainpartContractInstance) {
    //console.log("Owned brainpart Ids", brainpartTokenIds);

    var counter = 0;
    var brainparts = Collectibles.Data.Brainparts;
    var self = this;
    console.log(self);
    var brainpartFetchCallback = function(err, res) {
      if(err) {console.log(err); console.log("Loading failed."); return;}
      console.log("brainpart Data", res, counter);
      const cIndex = res[1]; const scIndex = res[2]; const strength = res[3];
      // error handling for bad sub categories
      counter += 1;
      if(scIndex == "" || Number(scIndex) == undefined ||
      !Utils.BrainpartSubCategoryCheck(cIndex, scIndex)) { return; }
      brainparts[scIndex].quantity += 1;
      brainparts[scIndex].strength = strength;
      if(counter == brainpartTokenIds.length) {
        self.props.SetBrainparts(
          brainparts.sort(Utils.GetSortOrder("strength")).reverse());
        // console.log(this);
        console.log("Loading finished!");
      }
    }
    brainpartFetchCallback.bind(this);

    for(let i = 0; i < brainpartTokenIds.length; i++) {
      brainpartContractInstance.brainparts(brainpartTokenIds[i], brainpartFetchCallback);
    }
  }

  // SetBrainparts(brainparts) {
  //   console.log("Loading finished!");
  //   this.setState({
  //     brainparts: brainparts.sort(Utils.GetSortOrder("strength")).reverse()})
  // }

  SetSelectedPage(page) {
    console.log("Page Switched!", page);
    this.setState({ selectedPage: page })
  }

  SetSelectedBrainpart(part) {
    //console.log(part);
    this.setState({ selectedBrainpart: part })
  }

  render() {
    console.log(this.props);
    var imageSrc, boostOrUnlockButtonText,description,
    lockLabelClass, lockLabelDivText;
    if (this.state.selectedBrainpart.strength == "0") {
      imageSrc = "/style/images/collectibles/brainparts/lockedBrainpart5.png";
      boostOrUnlockButtonText = "Construct";
      lockLabelClass = "locked";
      lockLabelDivText = "Locked";
      description = Collectibles.GeneralData.Brainparts.lockedDescription;
    } else {
      imageSrc = this.state.selectedBrainpart.image;
      boostOrUnlockButtonText = "Boost";
      lockLabelClass = "owned";
      lockLabelDivText = "Owned";
      description = this.state.selectedBrainpart.description;
    }

    return (
      <div className='brainpart_stash__container'>
        <div className="brainpart_detail_container">
          <div className="image_container">
            <img src={imageSrc}/>
            <button className="boost"
            onClick = {this.handleBoostClick}> {boostOrUnlockButtonText} </button>
          </div>
          <div className="description_container">
            <div className="name">
              {this.state.selectedBrainpart.subcategory}
            </div>
            <div className="details">
              <div className="level">
                <div className="increase-level-txt">
                  Strength Level {this.state.selectedBrainpart.strength}
                </div>
                <div className={`${lockLabelClass}`}>
                  {lockLabelDivText}
                </div>
              </div>
              <div className="text">
                {description}
              </div>
              <div className="neurons">
                <img src="/style/images/icons/neurons_qty.png"/>
                <div className="lbl"> Neurons Available</div>
                <div className="qty">
                  You have {this.state.selectedBrainpart.neuronQuantity} neurons of this type
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title"> Brainpart Collectibles </div>
        <div className="subtitle">
          Click on the parts to see details above
        </div>
        <BrainpartCardsComponent
          page={this.state.selectedPage}
          brainparts={this.props.brainparts}
          selectedBrainpart = {this.props.selectedBrainpart}
          selectFunction={this.SetSelectedBrainpart}/>
        <PagingBar
          selectFunction={this.SetSelectedPage}/>
      </div>
    );
  }
}
