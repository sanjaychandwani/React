import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    );
}

export default Header;
