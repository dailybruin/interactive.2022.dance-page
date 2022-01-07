import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import '../App.css' /* TODO: idk why the fonts aren't working, i put the import in app.css */

const Container = styled("div")`
    text-align:center;
    justify-content:center;
    background-color: black;
    /* margin: 20px auto; */
`

const Media = styled("img")`
    display: block;
    /* max-width:1400px;
    max-height:1000px; */
    justify-content:center;
    margin:auto;
    width: 95%;
    height: auto;
    background-color: black;
`

/* TODO: change to color: white */
const Credits = styled.div`
    font-family: 'Barlow';
    font-size: 10px;
    color: white;
    text-align: right;
    margin-right: 5%;
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
             <Media src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"/> 
            <Credits><b>PERSON</b>/Daily Bruin</Credits>
        </Container>
    )
}

Illo.propTypes = {
 caption: PropTypes.string
};