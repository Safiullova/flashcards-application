// import '../style/App.css';
import Header from './Header/Header';
import WordsList from './Table/WordsList';
import CardsList from './Slider/CardsList';
import Footer from './Footer/Footer';
import '../style/App.scss';
// import OneCard from './Slider/OneCard';
import Slider from './Slider/Slider';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Slider></Slider>
      {/* <OneCard></OneCard> */}
      <WordsList/>
      <CardsList/>
      <Footer/>
    </div>
  );
}

export default App;
