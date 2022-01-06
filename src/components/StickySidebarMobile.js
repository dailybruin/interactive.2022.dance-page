import styled from 'styled-components'
import React, {useState} from 'react';

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

export default function SidbarTitle(props){

    let scroll = props.scroll;
    console.log(scroll);
    let content = "";
    if (scroll <= 81){
        content = "Student dance groups bring K-pop dance routines to UCLA ";
    }
    else{
        content = "section 2";
    }
    
    return(
        
            <TitleContainer>
            {content}
            </TitleContainer>

    );


}