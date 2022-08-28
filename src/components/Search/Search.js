import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Search({ setSearch, setPageNumber }) {
    const currentLocation = useLocation().pathname;
    return ( currentLocation == '/' &&
        <form onSubmit={e => {
            e.preventDefault();
        }} className="col-6 mx-auto mt-4">
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                    onChange={e => {

                        setSearch(e.target.value);
                        setPageNumber(1);
                    }}
                    type="text" className="form-control" placeholder="Search" />
            </div>
        </form>
    )
}
