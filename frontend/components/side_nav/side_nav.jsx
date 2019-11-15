import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const side = (
        <section className="side-section">
            <div>
                <Link to="/">
                    <div className="side-icon home-icon"></div>
                    Home
                </Link>
            </div>
            <div>              
                <a href="https://github.com/jenn-jenn/mewTubu"><div className="side-icon github-icon"></div>Github</a>
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