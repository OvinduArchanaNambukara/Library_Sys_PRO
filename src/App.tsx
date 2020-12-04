import React from 'react';
import Library from "./components/Library";
import './assets/stylesheets/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./store/index";


function App() {
  return (
    <Provider store={store}>
        <Library/>
    </Provider>
  );
}

export default App;
