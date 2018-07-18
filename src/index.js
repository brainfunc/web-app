import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Home from './components/home';
import MyCollectibles from './components/my_collectibles';
import Marketplace from './components/marketplace';
import Battleground from './components/battleground';

import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/my_collectibles" component={MyCollectibles}/>
        <Route path="/marketplace" component={Marketplace}/>
        <Route path="/battleground" component={Battleground}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app__container'));
