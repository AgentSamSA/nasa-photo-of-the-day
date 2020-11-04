import React, { useState } from "react";

const Image = (props) => {

    const { nasaData} = props;

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
            <div>
                <img src={nasaData.url} alt={`NASA's Image of the day for ${nasaData.date}`} id="nasa-apod" />
            </div>
            <br></br>
            <div>
                <button><a href={nasaData.hdurl} target="_blank" style={buttonStyle}>View HD (opens in new window)</a></button>
            </div>

            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default Image;