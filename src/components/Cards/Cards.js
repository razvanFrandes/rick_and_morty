import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ results }) => {
    return (<>
        {results && results.map((x) => {
            let { id, name, image, location, gender, created, status } = x;
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
                <div key={id} className="col-4 mb-4 d-flex align-items-stretch">
                    <div className="card ">
                        <span className={`badge position-absolute  end-0 ${statusClass} mt-2 mx-2`}>{status}</span>
                        <img src={image} className="card-img-top"></img>
                        <div className="card-body">\
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
        })}
        {!results && 'No data here!'}
    </>)
}

export default Cards;

