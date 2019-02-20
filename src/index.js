import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import BrowserRouter and save it in the variable Router
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

