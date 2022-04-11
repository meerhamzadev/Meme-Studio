import React, { useContext, useState } from 'react'
import { Data } from '../data/Data';
import InfiniteScroll from 'react-infinite-scroll-component';
import GalleryCards from './ChildComponents/GalleryCards';

function Gallery() {

    const memeData = useContext(Data)
    const [length, setLength] = useState(6);
    const [test, updateTest] = useState(memeData.slice(0, length));
    const [hasMore, updateHasMore] = useState(true);
    console.log(memeData.length);
    const loadFunc = () => {
        if (test.length >= 99) {
            updateHasMore(false);
            return;
        }
        let tempData = [...test];
        tempData = [...tempData, ...memeData.slice(length, length + 6)];
        setTimeout(() => {
            updateTest(tempData);
            setLength(length + 6);
        }, 1000);
    }

    return (
        <>
            <InfiniteScroll
                dataLength={test.length}
                next={loadFunc}
                scrollThreshold={1.0}
                hasMore={hasMore}
                loader={<h2 style={{ marginTop: 10, textAlign: "center" }} >Loading.....</h2>}
                endMessage={
                    <button style={{
                        color: "white", borderRadius: ".5rem",
                        backgroundColor: "rgb(55, 55, 233)", padding: ".7rem 1rem",
                        fontSize: "1.7rem", width: "20%",
                        marginLeft: "40%", marginTop: "5%", border: "none",
                        cursor: "pointer"
                    }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Go to top
                    </button>
                }>
                <section className="Gallery">
                    {test.map(data => <GalleryCards memedata={data} key={data.id} />)}
                </section >

            </InfiniteScroll>

        </>
    )
}

export default Gallery
