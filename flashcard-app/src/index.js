import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
// import light from './style/light.scss';

import dark from './style/dark.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App
     theme={dark}
     />
  // </React.StrictMode>
);