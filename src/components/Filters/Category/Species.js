import React from 'react'
import FilterRadio from '../FilterRadio'

export default function Species({ setSpecies, setPageNumber }) {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
        "All"
    ];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Species
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    {species.map((item, index) =>
                        <FilterRadio
                            task={setSpecies}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='species'
                            index={index}
                            item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}
