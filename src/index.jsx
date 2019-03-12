import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './styles/index';

import {Router} from './router';
import {store} from "./redux/store";

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));
