import React from 'react';
import './index.css';
import store from './Redux/state'
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = ()=>{
 ReactDOM.render(
     <React.StrictMode>
      <App state={store} />
     </React.StrictMode>,
     document.getElementById('root')
 );

}
let stateLoc = store.getState();
rerenderTree(stateLoc);
store.subscribe(rerenderTree);





