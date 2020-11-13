import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const { nasaData } = props;

    if (!props.nasaData) return <h3>Loading...</h3>;

    const buttonStyle = {
        textDecoration: "none",
        color: "inherit",
    }

    return (
        <StyledDisplay>
            {nasaData.media_type === "image"
                ? <div className="media-container">
                    <div>
                        <img src={nasaData.url} alt={`NASA's Image of the day for ${nasaData.date}`} />
                    </div>
                    <div>
                        <button><a href={nasaData.hdurl} target="_blank" style={buttonStyle}>View HD (opens in new window)</a></button>
                    </div>
                </div>
                : <div className="media-container">
                    <div>
                        <iframe title="NASA video of the day" width="800" height="500" src={nasaData.url + "?controls=0"}></iframe>
                    </div>
                </div>
            }
            <div className="text-container">
                <h2>{nasaData.title}</h2>
                <p>{nasaData.date}</p>
                <p>{nasaData.explanation}</p>
            </div>
        </StyledDisplay>
    )
}

export default Image;

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    .media-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    img {
        width: 100%;
        background-color: ${pr => pr.theme.white};
        padding: 5px;
        max-height: 60vh;
    }

    button {
        margin: 10% 0;
    }

    .text-container {
        width: 30%;
        color: ${pr => pr.theme.white};
        background: ${pr => pr.theme.black};
        font-size: 1.3rem;
    }

    @media ${pr => pr.theme.breakPoints.bigTablet} {
        flex-direction: column;
        align-items: center;

        .media-container {
            width: 90%;
        }

        .text-container {
            width: 90%;
            font-size: 1.2rem;
        }
    }

    @media ${pr => pr.theme.breakPoints.tablet} {
        iframe {
            width: 500px;
            height: 350px;
        }
        .text-container {
            font-size: 1rem;
        }
    }

    @media ${pr => pr.theme.breakPoints.mobile} {
        iframe {
            width: 300px;
            height: 200px;
        }
        .text-container {
            font-size: .7rem;
        }
    }
`;