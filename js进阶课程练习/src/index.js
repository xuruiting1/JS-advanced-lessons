import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Todolist from './Todolist';
import store from './store';
import Counter from './Counter';
ReactDOM.render(
    <div style={{padding:'30px'}}>
        <Counter /> 
        <Todolist/>
    </div>
    , 
document.getElementById('root')
);
