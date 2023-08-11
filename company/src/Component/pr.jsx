import React from 'react'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './pr.css'
import { ReactComponent as Brand } from './logoipsum-297.svg'

const PR = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    return (
        <nav className='navbar'> 
            <div className='container'>
                <div className='logo'>  
                    <Brand/>
                </div>
                <div className='menu-icon' onClick={handleShowNavbar}>
                    <Menu />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`  }>  
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                         </li>
                        <li><NavLink to="/ViewMore">View More</NavLink> </li>
                        <li><NavLink to="/About">About</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav> 
    )
}

export default PR