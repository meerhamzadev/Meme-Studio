import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {

    return (
        <nav className="Navbar">
            <Link to="/" className="Navbar__logo">
                <img src={Logo} alt="Logo" className="Navbar__logo__image" />
            </Link>
            <div className="Navbar__Info">
                <h1 className="Navbar__Info__Title">Meme Gallery</h1>
            </div>
        </nav>
    )
}

export default Navbar
