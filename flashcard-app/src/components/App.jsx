// import '../style/App.css';
import Header from './Header/Header';
import WordsList from './Table/WordsList';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';
import '../style/App.scss';

function App() {
  return (
    <div className='app'>
      <Header/>
      <WordsList/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
