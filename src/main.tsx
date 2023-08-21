import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux'
import {store} from './app/store.ts'
import {PersistGate} from 'redux-persist/integration/react'
import persistor from "./app/store";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <App/>
   </PersistGate>
  </Provider>,
)
