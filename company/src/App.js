import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Header';
import HomeSlider from './Component/HomeSlider';
import BellowGrid from './Component/BellowGrid';
import AboutUs from './Component/AboutUs';
import './App.css';
import Allintenships from './Component/Allintenships';
import Slider from './Component/Cardslider';
import AllQuestion from './Component/AllQuestion';
import QuestionSecton from './Component/QuestionSecton';
import ChatBot from './Component/ChatBot';

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
        <QuestionSecton/> 
        <ChatBot/> 
        <Routes>
          <Route path="/about" exect element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

