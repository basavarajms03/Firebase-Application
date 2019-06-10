import React from 'react';
import { Link } from "react-router-dom";

const a = {
    color:"white"
}

export const SignedInLinks = () => {
    return(
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link to="/createproject" className="nav-link" style={a}>Create Project</Link>
            </li>
            <li className="nav-item">
                    <Link to="/" className="nav-link" style={a}>Logout</Link>
            </li>
            <li className="nav-item">
                    <Link to="/" className="nav-link" style={a}>Basavaraj</Link>
            </li>
        </ul>
    );
}