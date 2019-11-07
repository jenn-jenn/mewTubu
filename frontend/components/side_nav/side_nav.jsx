import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const side = (
        <section class="side-section">
            <div>
                <Link to="/"><img className="side-icon" src="/assets/home.png" alt="Home" />Home</Link>
            </div>
            
        </section>
    )
    return(
        <div className="side-nav">
            {side}
        </div>
        
    )
}

export default SideNav;