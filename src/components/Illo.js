import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import '../App.css' /* TODO: idk why the fonts aren't working, i put the import in app.css */
import { mediaQueries } from '../shared/config';

const Container = styled("div")`
    text-align:center;
    justify-content:center;
    background-color: black;
    margin-bottom: 25px;
    /* margin: 20px auto; */
    ${mediaQueries.tablet} {
      color:black;
      background-color:white;
    }
`

const Media = styled("img")`
    display: block;
    /* max-width:1400px;
    max-height:1000px; */
    justify-content:center;
    margin:auto;
    width: 100%;
    height: auto;
    background-color: black;
`

/* TODO: change to color: white */
const Credits = styled.div`
    font-family: 'Barlow';
    font-size: 10px;
    color: white;
    text-align: right;
    /* margin-right: 5%; */
    ${mediaQueries.tablet} {
      color: black;
      /* background-color:white; */
    }
`;

export default function Illo(props) {
    /*
        TODO: replace the contents of the return() with this once Kerck is enabled
        <Container>
            <Media src={props.illo_link}/>
            <Credits><b>{props.illo_credit}</b>/{props.illo_credit_2}</Credits>
        </Container>
    */
    return(
        <Container>
             <Media src={props.url}/> 
            <Credits><b>{props.credit1}</b>/{props.credit2}</Credits>
        </Container>
    )
}

Illo.propTypes = {
 caption: PropTypes.string
};