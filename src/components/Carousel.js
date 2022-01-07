import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

let sliderHeight = 250
let imageWidth = 300

const CarouselDiv = styled.div`
    padding-top: 10px;
    background-color: black;
`
const Image = styled.img`
    height: ${sliderHeight}px;
    max-width: ${imageWidth}px;
    object-fit: cover;
    margin: 0 auto;
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
    padding-bottom: 7px;
`

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, zIndex: 5, width: 30, height: sliderHeight, backgroundColor: 'black', opacity: 0.5}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, zIndex: 5, width: 30, height: sliderHeight, backgroundColor: 'black', opacity: 0.5}}
        onClick={onClick}
      />
    );
  }

export default function Carousel(props){
    let images = props.images
    const imageSlider = images.map((element) => {
        return <div id = {element}>
            <Image src = {element}></Image>
        </div>
    })
    return (
        <div style={{backgroundColor: "black"}}>
            <CarouselDiv>
                <Slider arrows={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1} nextArrow={<SampleNextArrow/>} prevArrow={<SamplePrevArrow/>} responsive={[
                    {
                    breakpoint: imageWidth * 2,
                    settings: { slidesToShow: 1}
                    },
                    {
                    breakpoint: imageWidth * 3,
                    settings: { slidesToShow: 2}
                    }
                ]}>
                {imageSlider}
                </Slider>
            </CarouselDiv>
            <CredsDiv><strong>{props.photographer}</strong>/Daily Bruin</CredsDiv>
            <CaptionDiv>{props.caption}</CaptionDiv>
        </div>
    );
}