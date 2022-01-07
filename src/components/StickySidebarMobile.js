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
    top: 3vh;
    background: white;
    padding-bottom: 3vh;
    height: auto;
`

const TitleContainer = styled.div`
    background: white;
    margin: 3vh;
    font-family: 'Barlow', sans-serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 900;
    text-align: left;
    padding-left: 10px;
    border-bottom: 5px solid;
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

const Arrows = styled.img`
    height: 3vh;
    align-self: flex-end;

`

export default function StickySidebarMobile(props){
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
    if (scroll <= 81){
        title = "Student dance groups bring K-pop dance routines to UCLA ";
        intro = "Put on your dancing shoes and follow along as columnist Laura Carter takes a behind-the-scenes look at dance, disassembled.";
    }
    else{
        title = "section 2";
        intro = "description";
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
                    <Intro>
                        {intro}
                    </Intro>
                    <ReadMore>
                       <div>read more</div>
                       <Arrows src={arrowimg}/>
                    </ReadMore>
                </IntroContainer>
            </Sidebar>
        </>

    );
}