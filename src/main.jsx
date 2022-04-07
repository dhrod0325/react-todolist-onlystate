import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/App.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Main} from './page/Main'

import {todoStorage} from "./lib/TodoStorage";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main todoStorage={todoStorage}/>
    </React.StrictMode>
)
