import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = () => (
  <iframe 
    width="95%" 
    height="415" 
    src="https://www.youtube.com/embed/j4ju_TWhKzA" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
);


export default VideoPlayer;