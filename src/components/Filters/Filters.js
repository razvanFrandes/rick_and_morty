import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber  }) => {
    return (
        <div className="col-3">
            {/* <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div style={{ cursor: "pointer" }} className="text-center text-primary text-decoration-underline">Clear Filters</div> */}
            <div style={{top: '50px'}} className="accordion position-sticky mb-4" id="accordionPanelsStayOpenExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>
        </div>
    )
}

export default Filters;