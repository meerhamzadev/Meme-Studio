import React, { useState } from 'react'
import { SketchPicker } from 'react-color';
const Meme = props => {
    const [textColor, setTextColor] = useState('#000000')
    return (
        <section className="MemeContainer">
            <div id="Meme" className="MemeContainer__Meme"
                style={{ backgroundImage: `url(${props.meme})` }}>

                <h2 className="MemeContainer__Text" style={{ color: `${textColor}`, fontSize: `${props.textSize}px` }} >{props.topText}</h2>
                <h2 className="MemeContainer__Text" style={{ color: `${textColor}`, fontSize: `${props.textSize}px` }} >{props.bottomText}</h2>

            </div>
            <SketchPicker color={textColor}
                onChange={updateColor => setTextColor(updateColor.hex)} />
        </section>
    );
}


export default Meme;
