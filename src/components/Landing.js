import styled from 'styled-components';
import { mediaQueries } from '../shared/config'
import React, {useState} from 'react';

const Container = styled.div`
    background-image: url(${props=>props.src});
    background-position: center;
    background-size: cover;
    position: relative;
    height: 97vh;
`

const Credits = styled("div")`
  position: absolute;
  bottom: 30px;
  right: 15px;
  color: white;
  font-size: 12px;
  font-family: 'Barlow', sans-serif;
`;

export default function Landing(props){
    const media = window.matchMedia('(max-width: 750px)');
    const [isMobile, setIsMobile] = useState(media.matches);
    console.log(isMobile);
    media.addEventListener('change', () => {
        if (media.matches !== isMobile) {
          setIsMobile(media.matches);
        }
    });
    return(
        
        <>
        
            {isMobile && <Container src={props.url}>
                <Credits><strong>Biona Hui</strong>/Daily Bruin</Credits>
            </Container>}

            {!isMobile && <Container src={props.url}>
                <Credits><strong>Biona Hui</strong>/Daily Bruin</Credits>
            </Container>}
            
        </>
        

    );
}