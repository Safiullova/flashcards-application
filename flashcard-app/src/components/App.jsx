import React, { useContext } from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import {Error, Game, Home} from "../pages";
import ThemeButton from "./button/ThemeButton";
import  {ThemeContext} from "../context/ThemeContext";

import '../style/App.scss';
import stHeader from '../style/header.scss';


function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={theme === 'light'? 'app body_light' : 'app body_dark'}>
      <header>
      <img className={stHeader.logo} src="assets/images/header-logo.svg" alt="LOGO"/>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/game">Game</NavLink>
        </nav>
        <ThemeButton onClick={toggleTheme} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
      <footer>
        <h1>FOOTER</h1>
      </footer>
      </div>
    </Router>
    
  );
}

export default App;
