import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Character({ info }) {
    const id = useParams().id;
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    let [characterInfo, setCharacterInfo] = useState("");
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setCharacterInfo(data);
        })()
    }, [])

    let { name, status, species, gender, origin, location, image, episode } = characterInfo;
    let statusClass;
    if (status === 'Alive') {
        statusClass = 'bg-success'
    } else if (status === 'Dead') {
        statusClass = 'bg-danger'
    } else {
        statusClass = 'bg-dark'
    };
    return (characterInfo &&
        <div class="character">
            <img className="character-image" src={image}></img>
            <div className="container align-items-center">
                <div className="col-6 offset-6">
                    <span className={`badge ${statusClass} mt-2`}>{status}</span>
                    <h1 className="fw-bold">{name}</h1>
                    <h6>Species: <span class="fw-bold">{species}</span></h6>
                    <h6>Gender: <span class="fw-bold">{gender}</span></h6>
                    <h6>Origin: <span class="fw-bold">{origin.name}</span></h6>
                    <h6>Location: <span class="fw-bold">{location.name}</span></h6>
                    <h6>Number of episodes : {episode.length}</h6>
                </div>
            </div>
        </div>
    )
}

export default Character