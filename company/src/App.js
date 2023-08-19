import './App.css';
import { BrowserRouter } from 'react-router-dom';
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
        <div id="home">
          <HomeSlider />
        </div>
        <div id="services">
          <BellowGrid />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="internships">
          <Allintenships />
        </div>
        <div id="team">
          <Slider />
        </div>
        <div id="faq"> 
          <QuestionSecton />
        </div>
        <div id="contact">
          <ChatBot />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

