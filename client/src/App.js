import React from 'react';

import store from "./redux/store";
import {Provider} from 'react-redux'

import Home from './pages/home'



const App = () => {

  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  )
};

export default App;
