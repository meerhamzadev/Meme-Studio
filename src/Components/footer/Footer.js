import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <section className="Footer">
            <h3 className="Footer__Title">
                <Link to="/" className="Footer__Title__Name" >Meme Gallery</Link>
                created with react❤️ by <a href="https://meerhamza1421-me.web.app/" target="_blank" rel="noopener noreferrer">Meer Hamza</a>⚡
            </h3>
        </section>
    )
}

export default Footer
