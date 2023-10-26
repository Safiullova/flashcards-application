import React, { useContext } from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import {Error, Game, Home, Table} from "../pages";
import ThemeButton from "./button/ThemeButton";
import  {ThemeContext} from "../context/ThemeContext";

import '../style/App.scss';
import Logo from "../images/header-logo.png";

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={theme === 'light'? 'body_light' : 'body_dark'}>
      <header>
      <img src={Logo} alt="LOGO"/>
        <nav>
          <NavLink to="/">О нас</NavLink>
          <NavLink to="/table">Таблица слов</NavLink>
          <NavLink to="/game">Тренировка</NavLink>
        </nav>
        <ThemeButton onClick={toggleTheme} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/table" element={<Table/>}/>
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
