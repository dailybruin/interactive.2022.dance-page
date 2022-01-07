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
    font-size: 15px;
    font-family: 'Barlow', sans-serif;
    color: white;
    background-color: black;
    ${mediaQueries.tablet} {
      padding: 30px 50px 30px 50px;
    }
`

const Para = styled.div`
color: white;
background-color: black;
`;

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
    min-height: 100vh;
    border: 0.5px solid #696969;
    background-color: black;
    color: white;
`
function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.dance-page")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])
  let landing_link = "";
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
  if (!data) {
    return null;
  }
  let culture_links = [];
  let makeup_links = [];
  let tech_links= [];
  data.culture.forEach(element => {
    if (element.type === "carousel") {
      culture_links.push(element.image_link)
    }
    
  });

  data.makeup.forEach(element => {
    if (element.type === "carousel") {
      makeup_links.push(element.image_link)
    }
  });

  data.tech.forEach(element => {
    if (element.type === "carousel") {
      tech_links.push(element.image_link)
    }
  });


  return (
     <div className="App">
       <Header/>
      <Landing url={data.landing_image}/>
      <IntroText>
        {data.intro}
      </IntroText>
      {!isMobile && <Container>
        <Left>
          <StickySidebar headings={data.sidebar} scroll={scroll}/>
        </Left>

        <Right>
          {/* kpop stuff first */}
          <TestingContainer>
            <Illo url={data.kpop[0].illo_link} credit1={data.kpop[0].illo_credit} credit2={data.kpop[0].illo_credit_2}/>
            <Image url={data.kpop[1].graphic_link} credit1={data.kpop[1].graphic_credit} credit2={data.kpop[1].graphic_credit_2} ></Image>
          </TestingContainer>
          {/* hiphop */}
          <TestingContainer>
            <VideoPlayer url={data.hiphop[0].video_link} credit1={data.hiphop[0].video_credit} credit2={data.hiphop[0].video_credit_2}/>
          </TestingContainer>
          {/* culture */}
          <TestingContainer>
            <Illo url={data.culture[0].illo_link} credit1={data.culture[0].illo_credit} credit2={data.culture[0].illo_credit_2}></Illo>
            <Carousel images = {culture_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
          </TestingContainer>
          {/* makeup */}
          <TestingContainer>
            {console.log(makeup_links)}
            <Carousel images = {makeup_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
            <Illo url={data.makeup[8].illo_link} credit1={data.makeup[8].illo_credit} credit2={data.makeup[8].illo_credit_2}></Illo>
          </TestingContainer>
          {/* tech */}
          <TestingContainer>
            <Image url={data.tech[0].image_link} credit1={data.tech[0].image_credit} credit2={data.tech[0].image_credit_2}></Image>
            {data.tech.map(block => {
              if (block.type ==="paragraph") {
                return (
                  <p>
                    {block.content}
                  </p>
                )
              }
            })}
            <Carousel images = {tech_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
          </TestingContainer>
        </Right>
      </Container>}

      {isMobile && <MobileContainer>
        <Left>
          <StickySidebar headings={data.sidebar} scroll={scroll}/>
        </Left>

        <Right>
          {/* kpop stuff first */}
          <TestingContainer>
            <Illo url={data.kpop[0].illo_link} credit1={data.kpop[0].illo_credit} credit2={data.kpop[0].illo_credit_2}/>
            <Image url={data.kpop[1].graphic_link} credit1={data.kpop[1].graphic_credit} credit2={data.kpop[1].graphic_credit_2} ></Image>
          </TestingContainer>
          {/* hiphop */}
          <TestingContainer>
            <VideoPlayer url={data.hiphop[0].video_link} credit1={data.hiphop[0].video_credit} credit2={data.hiphop[0].video_credit_2}/>
          </TestingContainer>
          {/* culture */}
          <TestingContainer>
            <Illo url={data.culture[0].illo_link} credit1={data.culture[0].illo_credit} credit2={data.culture[0].illo_credit_2}></Illo>
            <Carousel images = {culture_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
          </TestingContainer>
          {/* makeup */}
          <TestingContainer>
            {console.log(makeup_links)}
            <Carousel images = {makeup_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
            <Illo url={data.makeup[8].illo_link} credit1={data.makeup[8].illo_credit} credit2={data.makeup[8].illo_credit_2}></Illo>
          </TestingContainer>
          {/* tech */}
          <TestingContainer>
            <Image url={data.tech[0].image_link} credit1={data.tech[0].image_credit} credit2={data.tech[0].image_credit_2}></Image>

            {data.tech.map(block => {
              if (block.type ==="paragraph") {
                return (
                  <p>
                    {block.content}
                  </p>
                )
              }
            })}

            <Carousel images = {tech_links}
              photographer = "PHOTOGRAPHER"
              caption = "Caption. Caption caption caption. Caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption"
              >
            </Carousel>
          </TestingContainer>
        </Right>
      </MobileContainer>}
      
      
      <Footer/>
      
    </div>
  );
}

export default App;
