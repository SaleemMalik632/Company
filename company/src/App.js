import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Header';
import HomeSlider from './Component/HomeSlider';
import BellowGrid from './Component/BellowGrid';
import AboutUs from './Component/AboutUs';
import IntenshipCard from './Component/IntenshipCard';
import Image  from './Component/close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';
import './App.css';
import Allintenships from './Component/Allintenships';

export default function App() {
 
  const cardData = {
    Title: 'Card Title',
    Description: 'This is a description of the card.',
    Rating: 4.5,
    likeCount_: 12,
    url:Image
  };

  return (
    <div>

      <BrowserRouter>
        <Nav />
        <HomeSlider />
        <BellowGrid />
        <AboutUs />
        <Allintenships />  
        <Routes>
          <Route path="/about" exect element={'< Text abouts  />'} />
        </Routes>
        <h1 style={{ marginTop: '1000px' }}>sele</h1>
      </BrowserRouter>
    </div>
  );
}

