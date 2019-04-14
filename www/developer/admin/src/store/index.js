import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
const persistConfig = {
  key: 'kestrel-state',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));

let persistor = persistStore(store);

export { store, persistor };