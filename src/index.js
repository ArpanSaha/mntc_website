import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AOS from 'aos';

ReactDOM.render(<App data-aos='fade' />, document.getElementById('root'));
registerServiceWorker();
