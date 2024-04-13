import React from "react";
import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className="sideNav">
                <Link className="side-button" to='/'>Home</Link>
                <Link className='side-button' to='/create'>
                    Create a Crewmate!
                </Link>
                <Link className='side-button' to='/gallery'>
                    Crewmate Gallery
                </Link>
                <img 
                    src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png"
                    className="single-crewmate"
                />
            </div>
            <div className="whole-page">
                <Outlet />
            </div>
        </div>
    )
};


export default Layout;