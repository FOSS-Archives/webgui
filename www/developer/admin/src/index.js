import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// In production, we register a service worker to serve assets from local cache.
import registerServiceWorker from './registerServiceWorker';
// These are imported here to make them available through the application
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/primeflex.css';
// Our app starts here
import MainContainer from './components/MainContainer';
import {store, persistor} from './store';

render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <MainContainer />
      </PersistGate>
   </Provider>, document.getElementById('root'));

registerServiceWorker();
