import React, { useState, useEffect } from 'react'
import Banner from '../Banner/Banner'
import { Pagination } from '../Pagination/Pagination';

export default function Locations() {
    let [pageNumber, setPageNumber] = useState(1);
    let [info, setInfo] = useState([]);
    let [pageInfo, setPageInfo] = useState([]);
    let api = `https://rickandmortyapi.com/api/location?page=${pageNumber}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data.results);
            setPageInfo(data.info);
        })();
    }, [api]);

    let { id, name, type, dimension, residents, created } = info;

    return (
        <div>
            <Banner title="Rick and Morty" />
            <div className='container'>
                <div className='row'>
                    {info?.map((item, i) => {
                        return (
                            <div key={id} className="col-3  mb-4 d-flex align-items-stretch">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <h4 className="card-title mb-3 fw-bold ">{item.name}</h4>
                                        <div>
                                            <p><span className="fw-bold">Type:</span> <span className="d-block">{item.type}</span></p>
                                        </div>
                                        <div>
                                            <p><span className="fw-bold">Dimension:</span> <span className="d-block">{item.dimension}</span></p>
                                        </div>
                                        <div>
                                            <p><span className="fw-bold">Residents:</span> <span className="d-block">{item.residents.length}</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="container my-5 d-flex justify-content-center">
                <Pagination info={pageInfo} setPageNumber={setPageNumber} pageNumber={pageNumber} />
            </div>
        </div>
    )
}
