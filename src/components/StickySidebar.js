import styled from 'styled-components';
import React, {useState} from 'react';
import arrowimg from '../images/arrows.svg';
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: grey; */
    position: -webkit-sticky; /* Safari & IE */
    position: sticky;
    top: 5vh;
`
;
const TitleContainer = styled.div`
    background: white;
    margin: 4vh;
    font-family: 'Barlow', sans-serif;
    font-size: 28px;
    font-style: italic;
    font-weight: 900;
    text-align: left;
    padding-left: 10px;
    border-left: 5px solid;
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    margin: 0 4vh;
    padding: 3vh 1vh 0.5vh 1vh;
    font-family: 'Barlow', sans-serif;
    text-align: left;
`

const Intro = styled.div`
    font-weight: 400;
    font-size: 14px;
    /* color: white; */
`

const FakeIntro = styled.div`
    font-weight: 400;
    font-size: 14px;
    /* color: white; */
    padding-bottom: 3vh;
`

const ReadMore = styled.div`
    /* color: white; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    text-transform: uppercase;
    color: black;
    margin: 3vh 0 0.5vh 0;
    padding: 0 0 0 1vh;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-size: 12px;
`

// const Arrows = styled.div`
//     position: fixed;
//     left: 0;
//     background-image:url(${arrowimg});
//     background-position: center;
//     background-size: cover;
//     min-height: 10px;
// `

const Arrows = styled.img`

    /* float: right; */
    height: 3vh;
    align-self: flex-end;

`
export default function StickySidebar(props){
    const fixedStyle={
        margin: 0,
        position: "fixed",
        top: " 5vh",
        left: "8vw",  
         
    };

    const standardStyle = {};
    console.log(props.scroll);

    let scroll = props.scroll;
    console.log(scroll);
    let title = "";
    let intro = "";
    let link = "";
    let section_num = 1;

    if (scroll <= 42){
        section_num = 1;
        title = props.headings[0].title;
        intro = props.headings[0].text;
        link = props.headings[0].link;
    }
    else if (scroll <= 52) {
        section_num = 2;
        title = props.headings[1].title;
        intro = props.headings[1].text;
        link = props.headings[1].link;
    }

    else if (scroll <= 65) {
        section_num = 3;
        title = props.headings[2].title;
        intro = props.headings[2].text;
        link = props.headings[2].link;
    }

    else if (scroll <= 76) {
        section_num = 4;
        title = props.headings[3].title;
        intro = props.headings[3].text;
        link = props.headings[3].link;
    }

    else {
        section_num = 5;
        title = props.headings[4].title;
        intro = props.headings[4].text;
        link = props.headings[4].link;

    }

    return(
        <>
            <Sidebar
                percent={props.scroll}
                // style={props.scroll >= 42 ? fixedStyle : standardStyle}
            >
                <TitleContainer>
                    {title}
                </TitleContainer>
                <IntroContainer>
                {section_num !== 5 && 
                <>
                    <Intro>
                        {intro}
                    </Intro>
                   
                    <a href={link} style={{textDecoration: "none", color: 'black'}}>
                        
                        <ReadMore>
                        <a href={link} style={{textDecoration: "none", color: 'black'}}>read more</a>
                        <a href={link} style={{textDecoration: "none", color: 'black'}}>
                            <Arrows src={arrowimg}/>
                        </a>
                        </ReadMore>
                    </a>
                    </>}

                    {section_num === 5 &&<FakeIntro>{intro}</FakeIntro>}

                </IntroContainer>
            </Sidebar>
        </>

    );
}