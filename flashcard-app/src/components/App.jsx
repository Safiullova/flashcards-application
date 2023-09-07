import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import {Error, Game, Home} from "../pages";
// import {Footer, Slider, Table, WordsList, CardsList} from "../components";
import '../style/App.scss';
// import '../style/header.scss';
import stHeader from '../style/header.scss';
function App() {
  return (
    <Router>
      <div className='app'>
      <header>
      <img className={stHeader.logo} src="assets/images/header-logo.svg" alt="LOGO"/>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/game">Game</NavLink>
        </nav>
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
