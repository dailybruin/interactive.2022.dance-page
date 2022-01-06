import styled from 'styled-components'
import React, {useState} from 'react';


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
    flex-direciton: column;
    background-color: black;
    color: white;
    margin: 0 4vh;
    padding: 3vh;
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
`
export default function StickySidebar(props){
    const fixedStyle={
        margin: 0,
        position: "fixed",
        top: " 5vh",
        left: "8vw",  
         
    };

    const standardStyle = {};

    

    return(
        <>
            <Sidebar
                percent={props.scroll}
                // style={props.scroll >= 42 ? fixedStyle : standardStyle}
            >
                <TitleContainer>
                <strong>
                Student dance groups bring K-pop dance routines to UCLA
                </strong>
                </TitleContainer>

                <IntroContainer>
                    <Intro>
                    Put on your dancing shoes and follow along as columnist Laura Carter takes a behind-the-scenes look at dance, disassembled.
                    </Intro>
                    <ReadMore>
                    
                    </ReadMore>
                </IntroContainer>
            </Sidebar>
        </>

    );
}