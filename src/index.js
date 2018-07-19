/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';

import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CatalogRoot from './components/CatalogRoot';
import CatalogCategory from './components/CatalogCategory';
import CatalogDetail from './components/CatalogDetail';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import FullCart from './components/FullCart';
import NotFound from './components/NotFound';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import PaymentAndDelivery from './components/PaymentAndDelivery';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="page-wrapper">
        <Header />
        <main className="page-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalog/:cat" component={CatalogCategory} />
            <Route path="/catalog" component={CatalogRoot} />
            <Route path="/product/:code" component={CatalogDetail} />
            <Route path="/news/:code" component={NewsDetail} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={FullCart} />
            <Route path="/payment-and-delivery" component={PaymentAndDelivery} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
