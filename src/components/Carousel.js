import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const CarouselDiv = styled.div`
    background-color: black;
`
const Image = styled.img`
    height: 300px;
    padding-left: 5px;
`
const CredsDiv = styled.div`
    padding-top: 5px;
    text-align: right;
    font-family: 'Barlow', sans-serif;
    color: white;
    font-size: smaller;
`
const CaptionDiv = styled.div`
    padding-top: 5px;
    text-align: left;
    font-family: 'Barlow', sans-serif;
    color: white;
`

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, zIndex: 5, width: 30, height: 300, backgroundColor: 'black', opacity: 0.5}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, zIndex: 5, width: 30, height: 300, backgroundColor: 'black', opacity: 0.5}}
        onClick={onClick}
      />
    );
  }

export default function Carousel(props){
    let images = props.images
    let numImages = images.length
    let numSlides
    if (numImages % 3 == 0) {
        numSlides = numImages / 3
    } else {
        numSlides = (numImages / 3) + 1
    }
    const imageSlider = images.map((element) => {
        return <div id = {element}>
            <Image src = {element}></Image>
        </div>
    })
    return (
        <div style={{backgroundColor: "black"}}>
            <CarouselDiv>
                <Slider arrows={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={numSlides} variableWidth={true} nextArrow={<SampleNextArrow/>} prevArrow={<SamplePrevArrow/>}>
                    {imageSlider}
                </Slider>
            </CarouselDiv>
            <CredsDiv><strong>{props.photographer}</strong>/Daily Bruin</CredsDiv>
            <CaptionDiv>{props.caption}</CaptionDiv>
        </div>
    );
}