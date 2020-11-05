import React from "react";

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
            <div className="display-section">
                {nasaData.media_type === "image"
                    ? <div>
                        <div>
                            <img src={nasaData.url} alt={`NASA's Image of the day for ${nasaData.date}`} />
                        </div>
                        <br></br>
                        <div>
                            <button><a href={nasaData.hdurl} target="_blank" style={buttonStyle}>View HD (opens in new window)</a></button>
                        </div>
                    </div>
                    : <div>
                        <div>
                            <iframe title="NASA video of the day" width="800" height="600" src={nasaData.url + "?controls=0"}></iframe>
                        </div>
                        <br></br>
                    </div>
                }

                <p>{nasaData.explanation}</p>
            </div>
        </div>
    )
}

export default Image;