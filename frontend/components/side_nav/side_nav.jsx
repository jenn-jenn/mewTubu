import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const side = (
        <section >
            <Link to="/"><img src="/assets/home.png"alt="Home" /></Link>
        </section>
    )
    return(
        <div className="side-nav">
            {side}
        </div>
        
    )
}

export default SideNav;