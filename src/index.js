import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'

let url = 'https://jsonplaceholder.typicode.com/posts';
let photoUrl = 'https://jsonplaceholder.typicode.com/photos';


        ReactDOM.render(
            <React.StrictMode>
                <App state={state}/>
            </React.StrictMode>,
            document.getElementById('root')
        );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
