import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const FollowUs = () => {
    const phoneNumber = '032399454754';
    const whatsappMessage = 'Hello, I would like to get in touch with you.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    return (
        <>
            <div>
                <div className='followus'>
                    <ul>
                        <h3>FollowUs</h3>
                        <li>
                            <a rel='noopener noreferrer' href='https://www.facebook.com/profile.php?id=100074689028925&mibextid=ZbWKwL' target='_blank'>
                                <FaFacebook size={25} style={{ marginTop: '10px' }} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a rel='noopener noreferrer' href='https://instagram.com/its_______malik___632?igshid=ZDc4ODBmNjlmNQ==' target='_blank' >
                                <FaInstagram size={25} style={{ marginTop: '10px' }} />Instagram
                            </a>
                        </li>
                        <li>
                            <a rel='noopener noreferrer' href='https://www.linkedin.com/in/saleem-malik-5b194a22a' target='_blank'>
                                <FaLinkedin size={25} style={{ marginTop: '10px' }} /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a rel='noopener noreferrer' href={`tel:${whatsappLink}`}>
                                <FaWhatsapp size={25} style={{ marginTop: '10px' }} /> Whatsapp
                            </a>
                        </li>
                    </ul>
                </div> 
            </div>
        </>
    )
}

export default FollowUs