import React from 'react'
import { NavLink } from 'react-router-dom';

function CharactersCard({ info }) {
    let { id, name, status, species, type, gender, origin, location, image, created } = info;
    let birth = new Date(created).toDateString();

    let statusClass;
    if (status === 'Alive') {
        statusClass = 'bg-success'
    } else if (status === 'Dead') {
        statusClass = 'bg-danger'
    } else {
        statusClass = 'bg-dark'
    };

    return (
        <div key={id} className="col-3 mb-4 d-flex align-items-stretch">
            <div className="card ">
                <span className={`badge position-absolute  end-0 ${statusClass} mt-2 mx-2`}>{status}</span>
                <img src={image} className="card-img-top"></img>
                <div className="card-body">
                    <NavLink to={`/character/${id}`}>
                        <h4 className="card-title mb-3 fw-bold">{name}</h4>
                    </NavLink>
                    <div>
                        <p><span className="fw-bold">Location:</span> <span className="d-block">{location.name}</span></p>
                    </div>
                    <div>
                        <p><span className="fw-bold">Birth:</span> <span className="d-block">{birth}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CharactersCard