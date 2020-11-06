import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Image from "./Components/Image/Image.js";
import {API_KEY, BASE_URL} from "./constants.js";
import styled from "styled-components";
import Background from "./Assets/starbackground.jpg";

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL + API_KEY + "&date=2020-11-03")
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log("Error", err);
        setNasaData(err);
      });
      return {}
  }, []);

  return (
    <StyledApp className="App">
      <Header />
      <Image nasaData={nasaData} key={nasaData.date} />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Background});
  background-size: 100% 100%;
  color: ${pr => pr.theme.white};

  @import url(${pr => pr.theme.fontImport});

  font-family: 'Montserrat', sans-serif;
`;
