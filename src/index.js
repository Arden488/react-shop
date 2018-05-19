/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';

import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CatalogRoot from './components/CatalogRoot';
import CatalogCategory from './components/CatalogCategory';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog/:cat" component={CatalogCategory} />
          <Route path="/catalog" component={CatalogRoot} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
