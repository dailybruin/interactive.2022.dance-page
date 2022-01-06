import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import StickySidebar from "./components/StickySidebar";
// import PictureRow from "./components/PictureRow";
import Carousel from "./components/Carousel";
import Illo from "./components/Illo";
import Image from "./components/Image";



function Tech() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Image />
    </div>
  );
}

export default Tech;
