import React from 'react'
import { Link } from 'react-router-dom';

function GalleryCards({ memedata }) {
    return (
        <>
            { memedata.box_count === 2 && (
                <section className="Card">
                    <div className="Card__Image">
                        <img src={memedata.url} alt="Meme" />
                    </div>
                    <div className="Card__Overlay">
                        <h1 className="Card__Overlay__Name">{memedata.name}</h1>
                        <Link to={`/_${memedata.url}`} className="Card__Overlay__Button">Use Template</Link>
                    </div>
                </section>
            )}
        </>
    )
}

export default GalleryCards
