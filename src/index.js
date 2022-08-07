import React from 'react';
import ReactDOM  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//component
import App from './App';
//styles
import './index.css';
//font
import './fonts/Yekan.ttf';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );