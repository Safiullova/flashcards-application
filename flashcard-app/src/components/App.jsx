// import '../style/App.css';
import Header from './Header/Header';
import Table from './Table/Table';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';
import '../style/App.scss';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Table/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
