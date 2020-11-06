import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Enter a different date to see a new Image of the Day:</h2>
            <input type="text" placeholder="yyyy/mm/dd"></input>
            <button>Get new image</button>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 2% 0;
        width: 20%;
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