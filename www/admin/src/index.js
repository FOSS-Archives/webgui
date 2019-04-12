import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// In production, we register a service worker to serve assets from local cache.
import registerServiceWorker from './registerServiceWorker';
// These are imported here to make them available through the application
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/primeflex.css';
// Our app starts here
import MainContainer from './components/MainContainer';
import reducers from './reducers';
import { saveToLocalStorage, loadFromLocalStorage } from './util/state/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)) );
store.subscribe(() => saveToLocalStorage(store.getState()));

render(
   <Provider store={store}>
      <MainContainer />
   </Provider>, document.getElementById('root'));

registerServiceWorker();
