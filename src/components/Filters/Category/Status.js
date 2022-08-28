import React from 'react'
import FilterRadio from '../FilterRadio'

export default function Status({ setStatus, setPageNumber }) {
    let status = ['Alive', 'Dead', 'Unknown', 'All'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading3">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                    Status
                </button>
            </h2>
            <div id="panelsStayOpen-collapse3" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading3">
                <div className="accordion-body">
                    {status.map((item, index) =>
                        <FilterRadio
                            task={setStatus}
                            setPageNumber={setPageNumber}
                            key={index}
                            name='status'
                            index={index}
                            item={item} />
                    )}

                </div>
            </div>
        </div>
    )
}