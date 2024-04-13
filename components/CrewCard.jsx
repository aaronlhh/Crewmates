import React from "react";
import {Link} from 'react-router-dom'

const CrewCard = ({data}) => {
    return (
        <div 
            className={`crewmate-card`}
            style={{
                boxShadow: `10px -10px 15px ${data.color}`
            }}
        >
            <Link to={`/${data.id}`}>
                <img 
                    src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png"
                    className="single-crewmate" 
                />
            </Link>
            <h3>Name of Crewmate: <span>{data.name}</span></h3>
            <h3>Speed of Crewmate: <span>{data.speed}</span></h3>
            <h3>Color of Crewmate: <span>{data.color}</span></h3>
            <Link to={`/${data.id}/edit`} >
                <button className="edit-button">
                    Edit Crewmate
                </button>
            </Link>
        </div>
    )
};

export default CrewCard;