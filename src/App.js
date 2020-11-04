import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Image from "./Components/Image/Image";

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=BHmOQmb8S0nDwfdAj97ekL6lmSvbmj5NhOBDYIIJ")
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log("error", err);
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
