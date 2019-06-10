import React from 'react';

//Link from react router dom component to assign links
import { Link } from "react-router-dom";
import { SignedInLinks } from "./signedinLinks";
import {SignedOutLinks} from "./signedOutLinks";

const link = {
    color:"white",
    fontWeight:"bold"
}

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand" style={link}>Firebase</Link>
                </div>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    );
}

export default Navbar;