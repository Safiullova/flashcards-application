import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {ThemeContextProvider} from './context/ThemeContext';
import { MyContextComponent } from './context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  
<ThemeContextProvider >
<MyContextComponent>
	<App />
  </MyContextComponent>
</ThemeContextProvider>

  // </React.StrictMode>
);