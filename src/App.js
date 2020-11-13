import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Image from "./Components/Image/Image.js";
import {API_KEY, BASE_URL} from "./constants.js";
import styled from "styled-components";
import Background from "./Assets/starbackground.jpg";
import * as yup from "yup";
import schema from "./validations/formSchema";

const initialFormValues = {
  year: "",
  month: "",
  day: "",
}

const initialFormErrors = {
  year: "",
  month: "",
  day: "",
}

const initialDisabled = true;

function App() {
  const [nasaData, setNasaData] = useState("");
  const [date, setDate] = useState(nasaData.date);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, SetDisabled] = useState(initialDisabled);

  const updateForm = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const submitForm = () => {
    const newDate = {
      year: formValues.year.trim(),
      month: formValues.month.trim(),
      day: formValues.day.trim(),
    }
    setDate(`${newDate.year}-${newDate.month}-${newDate.day}`);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    axios
      .get(BASE_URL + API_KEY)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      SetDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledApp className="App">
      <Header />
      <Image nasaData={nasaData} key={nasaData.date} />
      <Footer
      date={date}
      setNasaData={setNasaData}
      api={API_KEY}
      base={BASE_URL}
      values={formValues}
      change={updateForm}
      submit={submitForm}
      disabled={disabled}/>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Background});
  height: 100%;
  color: ${pr => pr.theme.white};

  font-family: 'Montserrat', sans-serif;
`;
