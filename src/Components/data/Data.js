import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export let Data = createContext();

export let DataWrapper = ({ children }) => {

    const [data, updateData] = useState([])
    useEffect(() => {
        axios
            .get('https://api.imgflip.com/get_memes')
            .then(response => updateData(response.data.data.memes))

    }, [])


    return (
        data.length ?
            <Data.Provider value={data} >
                {children}
            </Data.Provider>
            :
            <> </>
    )
}


