import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
    React Bootstrap Configuration
 */
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
