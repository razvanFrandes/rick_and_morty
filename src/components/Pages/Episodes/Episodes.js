import React, { useState, useEffect } from 'react'
import Banner from '../../Banner/Banner';
import { Pagination } from '../../Pagination/Pagination';
import EpisodeCard from './EpisodeCard';



export default function Episodes() {
    let [pageNumber, setPageNumber] = useState(1);
    let [info, setInfo] = useState([]);
    let [pageInfo, setPageInfo] = useState([]);
    let api = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data.results);
            setPageInfo(data.info);
        })();
    }, [api]);
    return (
        <div>
            <Banner title="Rick and Morty" />
            <div className='container'>
                <div className='row'>
                    {info.map((item, i) => {
                        return <EpisodeCard key={i} item={item} />
                    })}

                </div>
            </div>
            <div className="container my-5 d-flex justify-content-center">
                <Pagination info={pageInfo} setPageNumber={setPageNumber} pageNumber={pageNumber} />
            </div>
        </div>
    )
}
