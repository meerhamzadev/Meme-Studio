import React, { useContext } from 'react'
import { Data } from '../data/Data';
import GalleryCards from './ChildComponents/GalleryCards';

function Gallery() {

    const memeData = useContext(Data)
    return (
        <>
            <section className="Gallery">
                {memeData.map(data => <GalleryCards memedata={data} key={data.id} />)}
            </section >
        </>
    )
}

export default Gallery
