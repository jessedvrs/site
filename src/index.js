import React from 'react';
import ReactDOM from 'react-dom';
import { register as registerServiceWorker } from './services/serviceWorker';
import App from './components/App';
import './stylesheets/index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
