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
import StickySidebarMobile from "./components/StickySidebarMobile";
import { mediaQueries } from './shared/config';

const IntroText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 200px 50px 200px;
    font-size: 20px;
    font-family: 'Barlow', sans-serif;
    color: white;
    background-color: black;
    ${mediaQueries.tablet} {
      padding: 30px 50px 30px 50px;
    }
`
const Container = styled.div`
    display: flex;
`

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Left = styled.div`
    width: 25%;
    /* background-color: black; */
`

const Right = styled.div`
    width: 75%;
    background-color:black;
    padding: 0 5vh 3vh 5vh;
`
const Up = styled.div`
    height: 25%;
`
const Down = styled.div`
    height: 75%;
`

const TestingContainer = styled.div`
    height: 100vh;
    border: 0.5px solid #696969;
    background-color: yellow;
    color: black;
`
function App() {
  const [ data, setData ] = useState(null);
  
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.dance-page/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const media = window.matchMedia('(max-width: 750px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  console.log(isMobile);
  media.addEventListener('change', () => {
      if (media.matches !== isMobile) {
        setIsMobile(media.matches);
      }
  });

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
      let progressBarHandler = () => {            
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight * 100}`;
          setScroll(scroll);
      }
      // console.log(scroll);
      window.addEventListener("scroll", progressBarHandler);
      return () => window.removeEventListener("scroll", progressBarHandler);
  });
  console.log(data)
  console.log(data.intro)
  let introText = data.intro;
  return (
    <div className="App">
      <Header/>
      
      <Landing/>
      <IntroText>
      {introText}
      </IntroText>
      
      {!isMobile &&<Container>
        <Left>
          <StickySidebar scroll={scroll}/>
        </Left>

        <Right>
          <Illo/>
          <PictureRow />
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
          <VideoPlayer />
      
        </Right>
      </Container>}
      {isMobile && <MobileContainer>

          <StickySidebarMobile scroll={scroll}/>

    
          <TestingContainer>section1</TestingContainer>
          <TestingContainer>section2</TestingContainer>
     
        </MobileContainer>}
     
  
      

      
     
      <Footer/>
      
    </div>
  );
}

export default App;
