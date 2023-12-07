import React from "react"
import Marker from "../images/marker.png"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} alt="Travel destination" className="card--images"/>
            <div className="card--info">
                <div className="card--location">
                    <img src={Marker} alt="Map marker icon" className="card--marker"/>
                    <span className="card--location--name">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer"><p className="card--map">View on Google Maps</p></a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--date">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}