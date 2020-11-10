import React, { useState, useEffect } from 'react'
import MemetemplatePage from '../MemetemplatePage';
import { SketchPicker } from 'react-color';
import Tippy from '@tippyjs/react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import 'tippy.js/dist/tippy.css';

const InputBoxes = props => {
    const [topText, setToptext] = useState(" ");
    const [bottomText, setBottomtext] = useState(" ");
    const [indexNumber, setIndexnumber] = useState(10)
    const [Color, setColor] = useState(' #000000');
    const [showColorpicker, updateShowcolorPicker] = useState(false)
    const [textSize, setTextsize] = useState(20)


    useEffect(() => {
        memeTemplateChanger()
    }, [])


    const memeTemplateChanger = () => {

        let randomNumber = Math.floor((Math.random() * 100))

        if (props.memeImage[randomNumber].box_count === 2)
            setIndexnumber(randomNumber);


        else {
            randomNumber = Math.floor((Math.random() * 100));

            if (props.memeImage[randomNumber].box_count === 2)
                setIndexnumber(randomNumber);

        }
    }

    const download = () => {
        domtoimage.toBlob(document.getElementById('Meme'))
            .then((blob) => {
                window.saveAs(blob, 'Your-meme.png');
            });
    }


    return (
        <>
            <input
                type="text"
                placeholder="Enter top text"
                className="input-boxes"
                onChange={e => setToptext(e.target.value)}

            />

            <input
                type="text"
                placeholder="Enter bottom text"
                className="input-boxes"
                onChange={e => setBottomtext(e.target.value)}
            />

            <Tippy content="Click to Adjust text size and color">
                <i onClick={() => updateShowcolorPicker(showColorpicker => !showColorpicker)}></i>
            </Tippy>

            {!showColorpicker

                ? <> </>

                :
                <div className="actions-on-text">
                    <SketchPicker color={Color}
                        onChange={updateColor => setColor(updateColor.hex)} />

                    <input className="textSize"
                        value={textSize}
                        type="range" min="0" max="100"
                        onInput={e => setTextsize(e.target.value)} />

                </div>
            }

            <MemetemplatePage
                memeImage={props.memeImage}
                topText={topText}
                bottomText={bottomText}
                indexNumber={indexNumber}
                textColor={Color}
                textSize={textSize}
            />

            <div className="actions">
                <button onClick={memeTemplateChanger} >Change meme template</button>
                <button onClick={download}>Download meme</button>
            </div>

        </>
    )
}

export default InputBoxes;
