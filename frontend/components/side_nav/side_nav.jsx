import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const side = (
        <section className="side-section">
            <div>
                <Link to="/">
                    <div className="side-icon home-icon"></div>
                    <i class="fas fa-home">Home</i>
                </Link>
            </div>
            <div>              
                <a href="https://github.com/jenn-jenn/mewTubu"><div className="side-icon github-icon"></div>Github</a>
            </div>

            
        </section>
    )
    return(
        <nav className="side-nav">
            {side}
        </nav>
        
    )
}

export default SideNav;