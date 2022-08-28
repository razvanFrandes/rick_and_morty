import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BannerEpisode from '../../Banner/BannerEpisode';
import Characters from '../Characters/Characters';


function Episode() {
    let currentEpisode = useParams().id;
    let [episodeInfo, setEpisodeInfo] = useState([]);
    let api = `https://rickandmortyapi.com/api/episode/${currentEpisode}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setEpisodeInfo(data);
        })()
    },[])
    return (
        <div>
            <BannerEpisode episodeInfo={episodeInfo} />
            <Characters episodeInfo={episodeInfo} />
        </div>
    )
}

export default Episode
