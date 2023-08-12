import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Header';
import HomeSlider from './Component/HomeSlider';
import BellowGrid from './Component/BellowGrid';
import AboutUs from './Component/AboutUs';
import './App.css';
import Allintenships from './Component/Allintenships';
import Slider from './Component/Cardslider';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <HomeSlider />
        <BellowGrid />
        <AboutUs />
        <Allintenships />
        <Slider />
        <Routes>
          <Route path="/about" exect element={'< Text abouts  />'} />
        </Routes>
        <h1 style={{ marginTop: '1000px' }}>sele</h1>
      </BrowserRouter>
    </div>
  );
}

