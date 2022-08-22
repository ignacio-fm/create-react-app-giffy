import React from "react";

function Gif({ id, title, url }) {
    return (
        <div className="App-gif-item">
            <h2>{title}</h2>
            <img alt={title} src={url} />
            <small>Gif ID: {id}</small>
        </div>
    )
}

export default Gif