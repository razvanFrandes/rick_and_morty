import React, { useEffect, useState } from 'react'
import CharactersCard from './CharactersCard';

function Characters({ episodeInfo }) {

    let [characterData, setCharacterData] = useState([]);
    let { characters } = episodeInfo;

    useEffect(() => {
        (function () {
            const promises = characters?.map(url => fetch(url).then(res => res.json()));
            Promise.all(promises).then(responses => {
                let data = [];
                setCharacterData(responses);
            });
        })()
    }, [characters])

    return (
        <div className='container mt-5'>
            <div className="row">
                {characterData.map((x, i) => {
                    return <CharactersCard key={i} info={x} />
                })}
            </div>
        </div>
    )
}

export default Characters