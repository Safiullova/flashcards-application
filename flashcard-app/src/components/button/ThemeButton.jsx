import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import st from './style.module.scss';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={theme === 'light'? st.btn_red : st.btn_blue}>
      {theme === 'light'? 'День' : 'Ночь'}
    </button>
  );
}

export default ThemeButton;