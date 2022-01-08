import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoPlayer from "./components/VideoPlayer";
import Landing from "./components/Landing";
import StickySidebar from "./components/StickySidebar";
import Carousel from "./components/Carousel";
import Illo from "./components/Illo";
import Image from "./components/Image";
import StickySidebarMobile from "./components/StickySidebarMobile";
import { mediaQueries } from './shared/config';
// import graphic from './images/bigGraphic.png';

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
`

const Right = styled.div`
    width: 75%;
    background-color:black;
    padding: 0 5vh 3vh 5vh;
`

const SectionContainer = styled.div`
    /* min-height: 100vh; */
    border-bottom: 5px solid #696969;
    background-color: black;
    color: white;
    padding-bottom: 5vh;
    margin-bottom: 5vh;
    ${mediaQueries.tablet} {
      color:black;
      background-color:white;
    }
    ${mediaQueries.tablet} {
      margin-left: 3vh;
      margin-right: 3vh;
    }
`

const P = styled.p`
    font-size: 15px;
    font-family: 'Barlow', sans-serif;
    text-align: left;
    
    ${mediaQueries.tablet} {
      /* margin-left: 15px;
      margin-right: 15px; */
    }
`;

const Byline = styled.div`
    text-align: left;
    font-size: 18px;
    font-family: 'Barlow', sans-serif;
    text-transform: uppercase;
`

const Credit = styled.div`
    text-align: left;
    font-size: 13px;
    font-family: 'Barlow', sans-serif;
`

const Div = styled.div`
background-color: white;
height: 20px;
margin-left: -50px;
margin-right: -50px;
`
function App() {

  //set up kerck
  const [ data, setData ] = useState(null);
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.dance-page")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])
  
  let landing_link = "";
  const media = window.matchMedia('(max-width: 900px)');
  const [isMobile, setIsMobile] = useState(media.matches);
  console.log(isMobile);
  media.addEventListener('change', () => {
      if (media.matches !== isMobile) {
        setIsMobile(media.matches);
      }
  });

  //set up scrolling event listener
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
      let progressBarHandler = () => {            
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const windowWidth = document.documentElement.clientWidth;
          const scroll = `${totalScroll / (windowHeight) * 100}`;
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

  let culture_captions = [];
  let makeup_captions = [];
  let tech_captions = [];

  let culture_credit = "";
  let makeup_credit = "";
  let tech_credit = "";

  let culture_credit_2 = "";
  let makeup_credit_2 = "";
  let tech_credit_2 = "";

  data.culture.forEach(element => {
    if (element.type === "carousel") {
      culture_links.push(element.image_link)
      culture_captions.push(element.caption)
    }

    if (element.type === "carousel_credit") {
      culture_credit = element.credit;
      culture_credit_2 = element.carousel_credit_2;
    }
    
  });

  data.makeup.forEach(element => {
    if (element.type === "carousel") {
      makeup_links.push(element.image_link)
      makeup_captions.push(element.caption)
    }

    if (element.type === "carousel_credit") {
      makeup_credit = element.credit;
      makeup_credit_2 = element.carousel_credit_2;
    }
    
  });

  data.tech.forEach(element => {
    if (element.type === "carousel") {
      tech_links.push(element.image_link)
      tech_captions.push(element.caption)
    }

    if (element.type === "carousel_credit") {
      tech_credit = element.credit;
    }
    
  });

  
  let num = 0;
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
          <SectionContainer>
            <Image url={data.kpop[0].graphic_link} credit1={""} credit2={""} ></Image>
            {/* <Image url={graphic} credit1={""} credit2={""} ></Image> */}
          </SectionContainer>
          {/* hiphop */}
          <SectionContainer>
            <VideoPlayer url={data.hiphop[0].video_link} credit1={data.hiphop[0].video_credit} credit2={data.hiphop[0].video_credit_2}/>
          </SectionContainer>
          {/* culture */}
          <SectionContainer>
            <Illo url={data.culture[0].illo_link} credit1={data.culture[0].illo_credit} credit2={data.culture[0].illo_credit_2}></Illo>
            <Carousel images = {culture_links}
              photographer = {culture_credit}
              credit2={culture_credit_2}
              caption={culture_captions}
              >
            </Carousel>
            {/* <Div style={{backgroundColor: "white"}}>hihi hihi hihi </Div> */}
          </SectionContainer>
          {/* makeup */}
          <SectionContainer>
            {console.log(makeup_links)}
            <Carousel images = {makeup_links}
              photographer = {makeup_credit}
              credit2={makeup_credit_2}
              caption = {makeup_captions}
              >
            </Carousel>
            <Illo url={data.makeup[8].illo_link} credit1={data.makeup[8].illo_credit} credit2={data.makeup[8].illo_credit_2}></Illo>
          </SectionContainer>
          {/* tech */}
          <SectionContainer>
            <Illo url={data.tech[0].image_link} credit1={data.tech[0].image_credit} credit2={data.tech[0].image_credit_2}></Illo>
            {data.tech.map(block => {
              
              if (block.type ==="paragraph") {
                return (
                  <P>
                    {block.content}
                  </P>
                );
              }

              else if (block.type === "carousel" && num === 0) {
                num = num + 1;
                return (
                  <Carousel images = {tech_links}
                  photographer = "Ariana Fadel"
                  credit2="Daily Bruin Staff"
                  caption = {tech_captions}
                  >
                  </Carousel>
                );
              }

              else if (block.type === "byline") {
                return (
                  <>
                    <Byline><strong>by {block.byline}</strong></Byline>
                    <Credit>{block.byline_title}</Credit>
                  </>
                )
              }
              
            })}
          </SectionContainer>
        </Right>
      </Container>}

      {isMobile && 
      <MobileContainer>
        
          {/* kpop stuff first */}
          <StickySidebarMobile headings={data.sidebar} scroll={scroll}/>
          <SectionContainer>
            <Image url={data.kpop[0].graphic_link} credit1={""} credit2={""} ></Image>
          </SectionContainer>
          {/* hiphop */}
          {/* <StickySidebarMobile title={data.sidebar[1].title} link={data.sidebar[1].link} intro={data.sidebar[1].text}/> */}
          <SectionContainer>
            <VideoPlayer url={data.hiphop[0].video_link} credit1={data.hiphop[0].video_credit} credit2={data.hiphop[0].video_credit_2}/>
          </SectionContainer>
          {/* culture */}
          {/* <StickySidebarMobile title={data.sidebar[2].title} link={data.sidebar[2].link} intro={data.sidebar[2].text}/> */}
          <SectionContainer>
            <Illo url={data.culture[0].illo_link} credit1={data.culture[0].illo_credit} credit2={data.culture[0].illo_credit_2}></Illo>
            <Carousel images = {culture_links}
              photographer = {culture_credit}
              caption={culture_captions}
              >
            </Carousel>
          </SectionContainer>
          {/* makeup */}
          {/* <StickySidebarMobile title={data.sidebar[3].title} link={data.sidebar[3].link} intro={data.sidebar[3].text}/> */}
          <SectionContainer>
            {console.log(makeup_links)}
            <Carousel images = {makeup_links}
              photographer = {makeup_credit}
              credit2={makeup_credit_2}
              caption = {makeup_captions}
              >
            </Carousel>
            <Illo url={data.makeup[8].illo_link} credit1={data.makeup[8].illo_credit} credit2={data.makeup[8].illo_credit_2}></Illo>
          </SectionContainer>
          {/* tech */}
          {/* <StickySidebarMobile title={data.sidebar[4].title} link={data.sidebar[4].link} intro={data.sidebar[4].text}/> */}
          <SectionContainer>
            <Illo url={data.tech[0].image_link} credit1={data.tech[0].image_credit} credit2={data.tech[0].image_credit_2}></Illo>
            {data.tech.map(block => {
              if (block.type ==="paragraph") {
                return (
                  <P>
                    {block.content}
                  </P>
                )
              }

              else if (block.type === "carousel" && num === 0) {
                num = num + 1;
                return (
                  <Carousel images = {tech_links}
                  photographer = "Ariana Fadel"
                  credit2="Daily Bruin"
                  caption = {tech_captions}
                  >
                  </Carousel>
                );
              }
              
              else if (block.type === "byline") {
                return (
                  <>
                    <Byline><strong>by {block.byline}</strong></Byline>
                    <Credit>{block.byline_title}</Credit>
                  </>
                )
              }
              
            })}
          </SectionContainer>
      </MobileContainer>}

      <Footer/>
      </div>
  );
}

export default App;
