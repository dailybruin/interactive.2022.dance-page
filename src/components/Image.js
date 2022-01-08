import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import '../App.css' /* TODO: idk why the fonts aren't working, i put the import in app.css */



const Container = styled("div")`
    text-align:center;
    justify-content:center;
    width: 100%;
    background-color: black;
`

const Media = styled("img")`
    display: block;
    /* max-width:1400px;
    max-height:1000px; */
    justify-content:center;
    margin:auto;
    width: 100%; 
    height: auto;
`

/* TODO: change to color: white */
const Credits = styled.div`
    font-family: 'Barlow';
    font-size: 10px;
    color: white;
    text-align: right;
    margin-right: 5%;
`
/* TODO: change to color: white */
const Caption = styled.div`
    font-family: 'Barlow';
    font-size: 14px;
    color: white;
    text-align: right;
    margin-right: 5%;
`;

export default function Image(props) {
    /*
        TODO: replace the contents of the return() with this once Kerck is enabled
        <Container>
            <Media src={props.illo_link}/>
            <Credits><b>{props.image_credit}</b>/{props.image_credit_2}</Credits>
            <Caption>{props.image_caption}
        </Container>
    */
    return(
        <Container>
            <Media src={props.url}/>
            <Credits><b>{props.credit1}</b>/Daily Bruin Staff</Credits>
            <Caption> {props.caption} </Caption>
        </Container>
    )
}

Image.propTypes = {
 caption: PropTypes.string
};