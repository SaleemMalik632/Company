import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Header';
import './App.css'
// import Prc from './Component/prc'
import Pr from './Component/pr';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Pr/>  
        <Routes> 
          <Route  path="/about" exect  element={'< Text abouts  />'} />
        </Routes>
        <h1 style={{marginTop:'1000px'}}>sele</h1>
      </BrowserRouter>
    </div>  
  ); 
}

