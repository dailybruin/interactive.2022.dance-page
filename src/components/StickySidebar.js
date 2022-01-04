import styled from 'styled-components'
import React, {useState} from 'react';


const Sidebar = styled.div`
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 20%;
    background: grey;
`
export default function StickySidebar(props){
    return(
        <>
            <Sidebar/>
        </>

    );
}