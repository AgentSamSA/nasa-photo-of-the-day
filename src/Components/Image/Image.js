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
        <div>
            <h3>{nasaData.title}</h3>

            {nasaData.date}
            <br></br>
            <br></br>
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
                            <iframe title="NASA video of the day" width="800" height="600" src={nasaData.url + "?controls=0"}></iframe>
                        </div>
                    </div>
                }

                <p className="text-container">{nasaData.explanation}</p>
            </StyledDisplay>
        </div>
    )
}

export default Image;

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .media-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    img {
        width: 100%;
    }

    button {
        margin: 10% 0;
    }

    .text-container {
        width: 30%;
        align-self: baseline;
    }
`;