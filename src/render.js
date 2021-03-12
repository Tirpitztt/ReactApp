import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {checkText,addPost} from "./Redux/state";

export let rerenderTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} checkText={checkText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}