import React, { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import { supabase } from "../src/client";

const CrewInfo = () => {
    const {id} = useParams();
    const [crew, setCrew] = useState(null);

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
                    <div>
                        <h1>Crewmate: {crew.name}</h1>
                        <h1>Stats:</h1>
                        <h2>Color: {crew.color}</h2>
                        <h2>Speed: {crew.speed} mph</h2>
                        {
                            crew.speed > 5?
                            <h3>
                                Wow, this Crewmate is super fast, that will be helpful! 🏃💨
                            </h3>
                            :
                            <h3>
                                You may want to find a Crewmate with more speed, this one is kind of slow 😬
                            </h3>
                        }
                        <Link to={`/${id}/edit`}>
                            <button>Wanna edit this Crewmate?</button>
                        </Link>
                    </div>
                    <br />
                    <img 
                        src="https://shimmering-stardust-c75334.netlify.app/assets/suspect.bdfacc7e.png" 
                        className="single-crewmate" 
                    />
                </>
                :
                <></>
            }
        </div>
    )

};

export default CrewInfo;