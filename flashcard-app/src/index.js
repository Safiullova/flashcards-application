import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
import { createStore } from 'redux';
import { getApiResorce } from './Redux/reduser';
import { Provider } from 'react-redux';
import {ThemeContextProvider} from './context/ThemeContext';
import { MyContextComponent } from './context/MyContext';

const store = createStore(getApiResorce);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  <Provider store = {store}>
    <ThemeContextProvider >
      <MyContextComponent>
	      <App />
      </MyContextComponent>
    </ThemeContextProvider>
  </Provider>


  // </React.StrictMode>
);