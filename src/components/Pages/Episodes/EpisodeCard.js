import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function EpisodeCard({ item }) {



    let { id, air_date, episode, url, created, name } = item;
    let birth = new Date(created).toDateString();
    return (
        <div key={id} className="col-3  mb-4 d-flex align-items-stretch">
            <div className="card w-100">
                <div className="card-body">
                    <span className={`badge  end-0 bg-success mt-2 fs-6 mb-2`}>{episode}</span>
                    <Link to={`/episodes/${id}`}>
                        <h4 className="card-title mb-3 fw-bold ">{name}</h4>
                    </Link>
                    <div>
                        <p><span className="fw-bold">Date:</span> <span className="d-block">{air_date}</span></p>
                    </div>
                    <div>
                        <p><span className="fw-bold">Created:</span> <span className="d-block">{birth}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
