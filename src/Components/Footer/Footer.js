import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Footer(props) {

    const { date, setDate, setNasaData, api, base, values, change, submit, disabled, errors } = props;

    const [dateValue, setDateValue] = useState("");

    const years = [];

    const days = [];

    for (let i = 1995; i < 2021; i++) {
        years.push(<option key={i} value={i}>{i}</option>);
    }

    for (let i = 1; i < 32; i++) {
        days.push(<option key={i} value={i < 10 ? "0" + i : i}>{i}</option>);
    }

    const getDateValue = (event) => {
        setDateValue(event.target.value);
    }

    const getNewDate = (event) => {
        let newDate = dateValue;
        console.log(newDate);
        setDate(newDate);
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
                    <label>Year:
                    <select className="year">
                            <option value="">- Year -</option>
                            {years}
                        </select>
                    </label>

                    <label>Month:
                    <select className="month">
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
                    </label>

                    <label>Day:
                    <select className="day">
                            <option value="">- Day -</option>
                            {days}
                        </select>
                    </label>
                </div>
                {/* <input type="text" placeholder="yyyy-mm-dd" onChange={getDateValue}></input> */}
                <button disabled={disabled}>Get new image</button>
            </form>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 2% 0;
        width: 25%;
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