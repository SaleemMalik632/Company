import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const FollowUs = () => {
    return (
        <>
            <div>
                <div className='followus'>
                    <ul>
                        <h3>FollowUs</h3>
                        <li>
                            <NavLink> <FaFacebook size={25} style={{ marginTop: '10px' }} /> Facebook </NavLink>
                        </li>
                        <li>
                            <NavLink> <FaInstagram size={25} style={{ marginTop: '10px' }} /> Instagram </NavLink>
                        </li>
                        <li>
                            <NavLink> <FaLinkedin size={25} style={{ marginTop: '10px' }} /> Linkedin </NavLink>
                        </li>
                        <li>
                            <NavLink> <FaWhatsapp size={25} style={{ marginTop: '10px' }} /> Whatsapp </NavLink>
                        </li>
                    </ul> 

                </div>
            </div>
        </>
    )
}

export default FollowUs