import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Header';
import HomeSlider from './Component/HomeSlider';
import BellowGrid from './Component/BellowGrid';
import AboutUs from './Component/AboutUs';
import Allintenships from './Component/Allintenships';
import Slider from './Component/Cardslider';
import QuestionSecton from './Component/QuestionSecton';
import ChatBot from './Component/ChatBot';
import Footer from './Component/Footer';




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
        <QuestionSecton />
        <ChatBot />
        <Footer/>
        <Routes>
          <Route path="/about" exect element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

