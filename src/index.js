import React from 'react';
import './index.css';
import state, {addPost, checkText, subscribe} from './Redux/state'
import ReactDOM from "react-dom";
import App from "./App";

let rerenderTree = (state)=>{
 ReactDOM.render(
     <React.StrictMode>
      <App state={state} addPost={addPost} checkText={checkText}/>
     </React.StrictMode>,
     document.getElementById('root')
 );

}
rerenderTree(state);
subscribe(rerenderTree);





