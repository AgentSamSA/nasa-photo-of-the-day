import React from "react";
import nasaLogo from "../../Assets/nasa-logo-web-rgb.png";
import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader className="header">
            <img src={nasaLogo} alt="Nasa logo" className="logo"/>
            <h1>Nasa's Photo of the Day!</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    .logo {
        width: 60px;
    }

    h1 {
        align-self: baseline;
    }

    @media ${pr => pr.theme.breakPoints.tablet} {
        width: 80%;
    }

    @media ${pr => pr.theme.breakPoints.mobile} {
        width: 100%;
        h1 {
            font-size: 1.5rem;
        }
    }
`;