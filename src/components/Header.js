import React from "react"
import GlobeIcon from "../images/globe.png"

export default function Header(){
    return (
        <div className="header">
            <img src={GlobeIcon} alt="Globe icon"/>
            <h3 className="header--title">my travel journal.</h3>
        </div>
    )
}