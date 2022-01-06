import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoPlayer from "./components/VideoPlayer";
import Landing from "./components/Landing";
import StickySidebar from "./components/StickySidebar";
// import PictureRow from "./components/PictureRow";
import Carousel from "./components/Carousel";
import Illo from "./components/Illo";
import Image from "./components/Image";
import PictureRow from "./components/PictureRow";
import PictureRowMobile from './components/PictureRowMobile'


function App() {
  const media = window.matchMedia('(max-width: 450px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  media.addEventListener('change', () => {
    if (media.matches !== isMobile) {
        setIsMobile(media.matches);
    }
    });
    
  return (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <VideoPlayer />
      <Landing/>
      {/* <StickySidebar/> */}
      <Carousel images = {["https://i.insider.com/6164e6d62457a4001982d6d6?width=1000&format=jpeg&auto=webp",
        "https://media1.popsugar-assets.com/files/thumbor/CvY77oKxMvbrpjd1-TazkhzFJ2U/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/10/27/851/n/1922283/36730ec66179a7bfcdf596.95187525_/i/jojo-siwa-dancing-with-the-stars-performances-videos.jpg",
        "https://www.billboard.com/wp-content/uploads/2021/11/Jojo-Siwa-dancing-with-the-stars-2021-billboard-1548-1636472738.jpg",
        "https://s31242.pcdn.co/wp-content/uploads/2021/11/jojo-siwa-dancing-with-the-stars.jpg",
        "https://static.parade.com/wp-content/uploads/2021/09/dancing-with-the-stars-jenna-johnson-jojo-siwa-160626_5765.jpg",
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F10%2F13%2FJoJo-Siwa-DWTS.jpg"
        ]}
        photographer = "PHOTOGRAPHER"
        caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
        ></Carousel>
      {/* <PictureRow/> */}
      <Illo />
      <Image />
      { !isMobile && <PictureRow />}
      { isMobile && <PictureRowMobile />}
      <Footer/>
      
    </div>
  );
}

export default App;
