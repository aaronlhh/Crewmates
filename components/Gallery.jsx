import React, { useEffect, useState } from "react";
import { supabase } from "../src/client";
import CrewCard from "./CrewCard";
import {Link} from 'react-router-dom'

const Gallery = () => {
    const [crews, setCrews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await supabase
                .from('crewmates')
                .select()
                .order('created_at', {ascending: true});
            
            setCrews(data.data)
            console.log(data.data);
        }
        fetchData();
    }, []);


    return (
        <div>
            <h1>Your Crewmate Gallery!</h1>
            <div className="crewmate-container">
                {
                    crews.length != 0? (
                        <>
                            {
                                Object.values(crews).map((crew, index) =>  
                                    <CrewCard
                                        key={index} 
                                        data={crew} 
                                    />
                                )
                            }
                        </>
                    ):(
                        <div className="empty-gallery">
                            <h3>You haven't made a crewmate yet!</h3>
                            <Link to='/create'>
                                <button>Create one here!</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );


};

export default Gallery;