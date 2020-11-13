import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Footer(props) {

    const { date, setNasaData, api, base, values, change, submit, disabled, errors } = props;

    const years = [];

    const days = [];

    for (let i = 2020; i > 1994; i--) {
        years.push(<option key={i} value={i}>{i}</option>);
    }

    for (let i = 1; i < 32; i++) {
        days.push(<option key={i} value={i < 10 ? "0" + i : i}>{i}</option>);
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    useEffect(() => {
        axios
            .get(base + api + "&date=" + date)
            .then(res => {
                console.log(res.data);
                setNasaData(res.data);
            })
            .catch(err => {
                console.log("Error", err);
                setNasaData(err);
            });
    }, [date]);

    return (
        <StyledFooter>
            <h2>Enter a different date to see a new Image of the Day:</h2>
            <form onSubmit={onSubmit}>
                <div className="date-selectors">
                    <div className="year">
                        <label>Year:</label>
                        <select
                            className="year"
                            onChange={onChange}
                            value={values.year}
                            name="year">
                            <option value="">- Year -</option>
                            {years}
                        </select>
                    </div>

                    <div className="month">
                        <label>Month:</label>
                        <select
                            className="month"
                            onChange={onChange}
                            value={values.month}
                            name="month">
                            <option value="">- Month -</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    <div className="day">
                        <label>Day:</label>
                        <select
                            className="day"
                            onChange={onChange}
                            value={values.day}
                            name="day">
                            <option value="">- Day -</option>
                            {days}
                        </select>
                    </div>
                </div>
                <button disabled={disabled}>Get new image</button>
            </form>
        </StyledFooter >
    )
}

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    form {
        width: 25%;
    }

    label {
        display: block;
    }

    .date-selectors {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin: 5% 0;
        text-align: center;
    }

    button {
        margin: 1.5%;
    }

    @media ${pr => pr.theme.breakPoints.mobile} {
        h2 {
            font-size: 1.2rem;
        }
    }
`;