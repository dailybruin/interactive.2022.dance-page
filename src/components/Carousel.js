import styled from 'styled-components';
import { render } from '@testing-library/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dancepic from "../images/dance.png"

const Caption = styled.div`
    position: relative;
    top: 50px;
`

export default function Carousel() {
    render() 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
    return (
        <div> 
            <Slider {...settings}>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
                <div>
                    <img src={dancepic} alt="dance" />
                </div>
            </Slider>
            <Caption>
                caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption 
            </Caption>
        </div>
      );
}