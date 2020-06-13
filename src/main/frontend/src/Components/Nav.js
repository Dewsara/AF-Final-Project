import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color : 'white'
    }
        return(
            <nav>
                <ul className="nav-links">
                    <Link style = {navStyle} to = "/games">
                        <li>Games</li>
                    </Link>
                    <Link style = {navStyle} to = "/news">
                        <li>News</li>
                    </Link>
                </ul>
            </nav>
        );
}

export default Nav;
