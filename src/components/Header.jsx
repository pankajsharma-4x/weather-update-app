import React from "react"
import Weather from "../images/weather.png"

const Header = () => {
    return (
        <header className="header">
            <img 
                src={Weather} 
                className="header--image"
            />
            <h2 className="header--title">Weather App</h2>
            <h4 className="header--project">React-Project 2</h4>
        </header>
    )
}
export default Header;