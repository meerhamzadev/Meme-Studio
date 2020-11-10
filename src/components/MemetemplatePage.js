import React from 'react'

const MemetemplatePage = props => {
    console.log(props.color)
    return (
        <div className="meme-template-pic">
            <div id="Meme"
                style={{ backgroundImage: `url(${props.memeImage[props.indexNumber].url})` }}>

                <h2 style={{ color: `${props.textColor}`, fontSize: `${props.textSize}px` }} >{props.topText}</h2>
                <h2 style={{ color: `${props.textColor}`, fontSize: `${props.textSize}px` }} >{props.bottomText}</h2>

            </div>
        </div>
    );
}


export default MemetemplatePage;
