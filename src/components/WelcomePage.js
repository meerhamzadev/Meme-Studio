import React, { useState } from 'react';
import axios from 'axios'
import InputBoxes from './childComponents/InputBoxes';



const WelcomePage = () => {
    const [memeImage, setmemeImage] = useState([]);
    const [loading, setloading] = useState(true)

    let memeGenerated = () => {

        document.getElementById('welcome-page').style.display = 'none';

        axios.get(`https://api.imgflip.com/get_memes`).then(resp => {
            setmemeImage(resp.data.data.memes);
            setloading(false)
        })
    }

    return (
        <header>
            <section id="welcome-page">
                <h2>
                    Welcome 🙌. Want to Create Your First Meme. <br /> Click Below 👇
                </h2>
                <button onClick={memeGenerated}>
                    Generate Meme
                </button>
            </section>
            {
                loading
                    ? <h1> </h1>

                    :
                    <div className="inputBoxes">
                        <InputBoxes memeImage={memeImage} />
                    </div>
            }
        </header >
    );
}
export default WelcomePage
