import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import PictureRow from "./components/PictureRow";
import PictureRowMobile from './components/PictureRowMobile'



function App() {
  const media = window.matchMedia('(max-width: 450px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  return (
    <div className="App">
      { !isMobile && <PictureRow />}
      { isMobile && <PictureRowMobile />}
    </div>
  );
}

export default App;
