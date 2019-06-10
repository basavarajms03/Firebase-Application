import React from 'react';
import { Link } from "react-router-dom";

const a = {
    color:"white"
}

export const SignedOutLinks = () => {
    return(
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link to="/signup" className="nav-link" style={a}>Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/signin" className="nav-link" style={a}>Login</Link>
            </li>
        </ul>
    );
}