import React from 'react';
import './index.css';
import store from './Redux/redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerenderTree = ()=>{
 ReactDOM.render(
     <React.StrictMode>
         <Provider store={store}>
             <App  />
         </Provider>

     </React.StrictMode>,
     document.getElementById('root')
 );

}



let stateLoc = store.getState();
rerenderTree(stateLoc);
store.subscribe(()=>{
    rerenderTree(stateLoc);
});





