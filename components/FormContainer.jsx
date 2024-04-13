import React from "react";


const FormContainer = ({name, color, speed, handleChange}) => {
    const colors = ['Red', 'Green', 'Blue', 'Purple',
                    'Yellow', 'Orange', 'Pink', 'Rainbow']
    return (
        <form className="form-container">
            <div className="mini-container">
                <label htmlFor="name">
                    <h3>Name:</h3>
                </label>
                <input 
                    type="text"
                    placeholder="Enter crewmate's name"
                    name="name" 
                    id="name"
                    onChange={handleChange}
                    value={name}
                />
            </div>
            <div className="mini-container">
                <label htmlFor="speed">
                    <h3>Speed (mph):</h3>
                </label>
                <input 
                    type="text"
                    placeholder="Enter speed in mph"
                    name="speed" 
                    id="speed"
                    onChange={handleChange}
                    value={speed}
                />
            </div>
            <div className="mini-container">
                <label>
                    <h3>Color:</h3>
                </label>
                {
                    Object.values(colors).map((value, index) => (
                        <li key={index}>
                            <input 
                                type="radio"
                                name="color"
                                value={value}
                                id={value} 
                                onChange={handleChange}
                                checked={color == value}
                            />
                            <label htmlFor={value}>{value}</label>
                        </li>
                    ))
                }
            </div>
        </form>
    )
};


export default FormContainer;