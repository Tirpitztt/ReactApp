import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let url = 'https://jsonplaceholder.typicode.com/posts';
let photoUrl = 'https://jsonplaceholder.typicode.com/photos';

async function ebanawrot(){
    try{

        const response = await fetch(photoUrl);
        const data = await response.json();

        ReactDOM.render(
            <React.StrictMode>
                <App dialogs={data}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }catch(e){

    }finally {

    }

}
ebanawrot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
