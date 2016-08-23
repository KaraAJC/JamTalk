import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "K9ZahiPfEuFHDR0OLhTjuIXwrgZBr94m8m41NAL9",
  authDomain:"jamtalk.firebaseapp.com" ,
  databaseURL:"https://jamtalk.firebaseio.com/" ,
  storageBucket:"https://jamtalk.appspot.com"
}

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
