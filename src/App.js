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
    font-size: 12px;
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
		fetch("<TODO: insert api url here>")
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

  return (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <VideoPlayer />
      <Landing/>
      {/* <StickySidebar/> */}
      <Image />
      { !isMobile && <PictureRow />}
      { isMobile && <PictureRowMobile />}
      <IntroText>
      From selecting music and choreography to perfecting costumes and makeup, the ins and outs of putting on a dance performance are complex and detailed. Put on your dancing shoes and follow along as columnist Laura Carter takes a behind-the-scenes look at dance, disassembled.
      </IntroText>
      {!isMobile &&<Container>
        <Left>
          <StickySidebar scroll={scroll}/>
        </Left>

        <Right>
          <TestingContainer>section1</TestingContainer>
          <TestingContainer>section2</TestingContainer>

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
