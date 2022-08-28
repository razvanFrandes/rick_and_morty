import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul className="nav justify-content-center py-3 gap-2">
            <li className="nav-item">
                <NavLink 
                    to={'/'} 
                    className="nav-link text-dark fw-bold rounded">Characters</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  
                    to={'/episodes'}
                    className="nav-link text-dark fw-bold rounded">Episodes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    to={'/locations'}
                    className="nav-link text-dark fw-bold rounded">Locations</NavLink>
            </li>
        </ul>
    )
}
