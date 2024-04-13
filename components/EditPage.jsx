import React from "react";
import { supabase } from "../src/client";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";

const EditPage = () => {
    const {id} = useParams();
    // crew infomation of given id
    const [crew, setCrew] = useState({
        name: '',
        color: '',
        speed: ''
    });
    // input given by form
    const [input, setInput] = useState({
        name: '',
        color: '',
        speed: ''
    });

    const handleUpdate = async (event) => {
        const newInput = {}
        Object.entries(input).map(([key,value], index) => {
            if (value == '') {
                newInput[key] = crew[key];
            }else {
                newInput[key] = value;
            }
        })

        // console.log(newInput)
        await supabase
            .from('crewmates')
            .update(newInput)
            .eq('id', id);
        
        alert('Crewmate updated successfully');

        setCrew(newInput);
        setInput({
            name: '',
            color: '',
            speed: ''
        })
    };

    const handleDelete = async () => {
        await supabase  
            .from('crewmates')
            .delete()
            .eq('id', id);
        
        alert('Crewmate deleted successfully');

        window.location = '/';
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await supabase
                .from('crewmates')
                .select()
                .eq('id', id)
                
            setCrew(data.data['0'])
            console.log(data.data)
        };
        fetchData();
    }, []);

    return (
        <div>
            {
                crew ? 
                <>
                    <h1>Update Your Crewmate :)</h1>
                    <img 
                        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
                        height='200px'
                        width='auto'
                    />
                    <h2> Current Crewmate Info: </h2>
                    <h3> Name: {crew.name}, Speed: {crew.speed}, Color: {crew.color}</h3>
                    <FormContainer 
                        name={input.name}
                        color={input.color}
                        speed={input.speed}
                        handleChange={(event) => {
                            setInput((prev) => ({
                                ...prev,
                                [event.target.name]: event.target.value,
                            }))
                        }}
                    />
                    <button onClick={handleUpdate}>Update Crewmate</button>
                    <button 
                        onClick={handleDelete} 
                        style={{
                            marginLeft: '20px'
                        }}
                    >
                        Delete Crewmate
                    </button>
                </>
                :
                <></>
            }   
        </div>
    )
};

export default EditPage;