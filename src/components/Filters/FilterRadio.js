import React from 'react'

function FilterRadio({ name, index, item, task, setPageNumber }) {
    let itemvalue = item;
    if (item === 'All') {
        itemvalue = "";
    }
    return (
        <div>
            <div className="form-check">
                <input
                    onClick={() => {
                        setPageNumber(1);
                        task(itemvalue);
                        let banner = document.querySelector('.banner');
                        let position = banner.offsetTop + banner.clientHeight

                        window.scrollTo({
                            top: position,
                            left: 0,
                            behavior: 'instant'
                        });
                    }}
                    style={{ cursor: 'pointer' }}
                    className="form-check-input"
                    name={name}
                    id={`${name}-${index}`}
                    type="radio"
                    value="" />
                <label style={{ cursor: 'pointer' }} className="form-check-label" htmlFor={`${name}-${index}`}>
                    {item}
                </label>
            </div>
        </div>
    )
}

export default FilterRadio