import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import HomeCards from './components/homeCards';
import Home2 from './components/home2';
import RHome from './racismo/racismo';
import HHome from './homofobia/homofobia';
import THome from './transfobia/transfobia';
import MHome from './misoginia/misoginia';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <HomeCards />
              <Home2 />
            </>
          } />
          
          <Route path="/racismo" element={<RHome />} />
          <Route path="/homofobia" element={<HHome />} />
          <Route path="/transfobia" element={<THome />} />
          <Route path="/misoginia" element={<MHome />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;