import React from 'react'


export default function BannerEpisode({ setPageNumber, setSearch, episodeInfo }) {

    let { name, air_date, episode, characters, created } = episodeInfo;
    let birth = new Date(created).toDateString();
    const bannerStyle = {
        backgroundImage: 'url(https://wallpaperaccess.com/full/5196310.png)',
        backgroundSize: 'cover',
        backgroundColor: '#1500cb',
        backgroundBlendMode: 'color-burn',
        minHeight: 450
    }

    return (
        <div style={bannerStyle} className="position-relative banner rounded overflow-hidden p-3 m-3 p-md-5 md-3 text-center mt-0">
            <div className="col-md-5 p-lg-5 mx-auto my-5 text-white">
                <span>{birth}</span>
                <h5><span>{episode}</span></h5>
                <h1 className="display-4 fw-bold text-white" style={{ fontSize: '80px' }}>{name}</h1>
            </div>
        </div>
    )
}
