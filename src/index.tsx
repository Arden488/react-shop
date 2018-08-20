/* global document */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './reducers';

import './styles.css';

import CatalogCategory from './components/CatalogCategory';
import CatalogDetail from './components/CatalogDetail';
import Footer from './components/Footer';
import FullCart from './components/FullCart';
import FullCheckout from './components/FullCheckout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import NotFound from './components/NotFound';
import PaymentAndDelivery from './components/PaymentAndDelivery';
import Profile from './components/Profile';
import Register from './components/Register';
import Slider from './components/Slider';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="page-wrapper">
        <Header />
        <Route exact={true} path="/" component={Slider} />
        <main className="page-main">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/catalog/:cat" component={CatalogCategory} />
            <Route path="/product/:code" component={CatalogDetail} />
            <Route path="/news/:code" component={NewsDetail} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={FullCart} />
            <Route path="/checkout" component={FullCheckout} />
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
