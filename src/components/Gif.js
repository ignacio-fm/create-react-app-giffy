import React from "react";

import "./Gif.css";

function Gif({ id, title, url, username }) {
    return (
        <a href={`#${id}`} className="App-gif-item">
            <h2>{title}</h2>
            <img alt={title} src={url} />
        </a>
    )
}

export default Gif