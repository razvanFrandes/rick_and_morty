import React from 'react'
import FilterRadio from '../FilterRadio'

export default function Gender({ setGender, setPageNumber }) {
    let gender = ['female', 'male', 'genderless', 'unknown', 'All'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Gender
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    {gender.map((item, index) =>
                        <FilterRadio
                            task={setGender}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='gender'
                            index={index}
                            item={item} />
                    )}

                </div>
            </div>
        </div>
    )
}