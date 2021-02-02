import React from 'react'
import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar__logo">
                <img src={Logo} alt="Logo" className="Navbar__logo__image" />
            </div>
            <div className="Navbar__Info">
                <h1 className="Navbar__Info__Title">Meme Gallery</h1>
                <form className="Navbar__Info__Search">
                    <input type="text" placeholder="Enter the template name" className="Navbar__Info__Search__Box" />
                    <button className="Navbar__Info__Search__Button">🔎</button>
                </form>
            </div>
            {/* <h1 className="Navbar__Title">
                Meme Gallery
            </h1> */}
        </nav>
    )
}

export default Navbar
