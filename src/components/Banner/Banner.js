import React from 'react'
import Search from '../Search/Search'
import { useLocation } from 'react-router-dom';


export default function Banner({ setPageNumber, setSearch, title }) {
    let currentPage = useLocation().pathname;
    const setbannerImage = () => {
        let color = '#8884c4';
        if (currentPage == '/episodes' || currentPage.includes('/episodes/')) {
            color = '#1500cb'
        }
        else if (currentPage == '/locations') {
            color = '#ae0009'
        }
        return color;
    }

    const bannerStyle = {
        backgroundImage: 'url(https://wallpaperaccess.com/full/5196310.png)',
        backgroundSize: 'cover',
        backgroundColor: setbannerImage(),
        backgroundBlendMode: 'color-burn',
        minHeight: 450
    }

    return (
        <div style={bannerStyle} className="position-relative banner rounded overflow-hidden p-3 m-3 p-md-5 md-3 text-center mt-0">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-bold text-white" style={{ fontSize: '80px' }}>{title}</h1>
                <Search setPageNumber={setPageNumber} setSearch={setSearch} />
            </div>
        </div>
    )
}
