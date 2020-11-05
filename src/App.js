import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Image from "./Components/Image/Image.js";
import {API_KEY, BASE_URL} from "./constants.js";

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL + API_KEY)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log("Error", err);
        setNasaData(err);
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <Image nasaData={nasaData} key={nasaData.date} />
      <Footer />
    </div>
  );
}

export default App;
