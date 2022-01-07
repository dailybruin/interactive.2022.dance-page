import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// TODO: idk why the font isn't working

/* TODO: change to color: white */
const Credits = styled.div`
    font-family: 'Barlow';
    font-size: 10px;
    color: white;
    text-align: right;
    /* margin-right: 5% */
`

const VideoPlayer = () => (
  <>
  <iframe 
    width="100%" 
    height="515" 
    src="https://www.youtube.com/embed/_u4Pv6Q5gaE" 
    title="Dance Disassembled" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    <Credits><b>PERSON</b>/Daily Bruin or Courtesy or Title</Credits>
    </>
);


export default VideoPlayer;
