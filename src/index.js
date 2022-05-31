import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Quiz from './components/Quiz';
import blob1 from "./assets/blob-top.png"
import blob2 from "./assets/blob-bottom.png"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* shared images for same background across all pages */}
    
    <section>
      <img src={blob1} className="img-top" alt='top' />
      <img src={blob2} className="img-bottom" alt='bottom'/>
    </section>

    {/* Routering */}
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
