import React, {useState} from "react";
import styled from "styled-components";

export default function Footer(props) {

    const { setDate } = props;

    const [dateValue, setDateValue] = useState("");

    const getDateValue = (event) => {
        setDateValue(event.target.value);
    }
    
    const getNewDate = (event) => {
        let newDate = dateValue;
        console.log(newDate);
        setDate(newDate);
    }

    return (
        <StyledFooter>
            <h2>Enter a different date to see a new Image of the Day:</h2>
            <input type="text" placeholder="yyyy-mm-dd" onChange={getDateValue}></input>
            <button onClick={getNewDate}>Get new image</button>
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