import React, { useState } from 'react'
import Meme from './ChildComponent/Meme';
import domtoimage from 'dom-to-image';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

const MemeTemplate = () => {
    const imageSource = window.location.href.slice(window.location.href.indexOf('_') + 1, window.location.href.length);
    const [topText, setToptext] = useState(" ");
    const [bottomText, setBottomtext] = useState(" ");
    const [textSize, setTextsize] = useState(20)

    const download = () => {
        domtoimage.toBlob(document.getElementById('Meme'))
            .then((blob) => {
                saveAs(blob, 'Your-meme.png');
            });
    }


    return (
        <section className="MemeTemplate">

            <div className="MemeTemplate__Text">
                <input
                    type="text"
                    placeholder="Enter top text"
                    className="MemeTemplate__Text__TextBox"
                    onChange={e => setToptext(e.target.value)}

                />


                <input className="textSize"
                    value={textSize}
                    type="range" min="0" max="100"
                    className="MemeTemplate__Text__Slider"
                    onChange={e => setTextsize(e.target.value)} />

                <input
                    type="text"
                    placeholder="Enter bottom text"
                    className="MemeTemplate__Text__TextBox"
                    onChange={e => setBottomtext(e.target.value)}
                />

            </div>

            <Meme
                meme={imageSource}
                topText={topText}
                bottomText={bottomText}
                textSize={textSize}
            />

            <div className="MemeTemplate__Actions">
                <Link to='/' className="MemeTemplate__Actions__Button"  >Back</Link>
                <button className="MemeTemplate__Actions__Button" onClick={download}>Download meme</button>
            </div>

        </section>
    )
}

export default MemeTemplate