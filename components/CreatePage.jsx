import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { supabase } from "../src/client";

const CreatePage = () => {
    const [info, setInfo] = useState({
        name: '',
        color: '',
        speed: ''
    });

    const handleCreate = async (event) => {
        await supabase
            .from('crewmates')
            .insert(info);
        
        alert('Crewmate created successfully');
        setInfo({
            name: '',
            color: '',
            speed: ''
        })
    };

    return (
        <div className="createpage">
            <h1>Create a New Crewmate</h1>
            <img 
                src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" 
                height='100px'
                width='auto'
            />
            <FormContainer 
                name={info.name}
                color={info.color}
                speed={info.speed}
                handleChange={(event) => {
                    setInfo((prev) => ({
                        ...prev,
                        [event.target.name]: event.target.value,
                    }))
                }}
            />
            <button onClick={handleCreate}>
                Create Crewmate
            </button>
        </div>
    )
};

export default CreatePage;