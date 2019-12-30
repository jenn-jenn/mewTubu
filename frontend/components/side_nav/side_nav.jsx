import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const side = (
        <section className="side-section">
            <div>
                {/* <a href="/"><i className="fas fa-home" />Home</a> */}
                <Link to="/"><i className="fas fa-home" />Home</Link>
            </div>
            <div>              
                <a href="https://github.com/jenn-jenn/mewTubu"><i className="fab fa-github"></i>Github</a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/jennifer-wong-295132103/"><i className="fab fa-linkedin"></i>LinkedIn</a>
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