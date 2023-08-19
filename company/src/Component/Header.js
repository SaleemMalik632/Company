import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-scroll";
import { Home, Info, Work, People, Phone, QuestionAnswer } from '@mui/icons-material';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return ( 
        <>
            <nav className={`main-header`} style={{ zIndex: 100 }}>
                <div className={"main-head"}>
                    <div>
                        <h2>infoPro</h2>
                    </div>
                    <div className="icon" onClick={toggleMenu}>
                        <FaBars size={30} />
                    </div>
                    <div className={`nav-elements ${isMenuOpen && 'active'}`}>
                        <ul>
                            <li>
                                <Link className="link" smooth={true} to="home" > <Home style={{ marginBottom: '-9px' }} /> Home </Link>
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='about'> <Info style={{ marginBottom: '-9px' }} /> About </Link >
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='services'> <Work style={{ marginBottom: '-9px' }} /> Services </Link >
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='internships'> <People style={{ marginBottom: '-9px' }} /> Internships </Link >
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='team'> <People style={{ marginBottom: '-9px' }} /> Team </Link >
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='contact'> <Phone style={{ marginBottom: '-9px' }} /> Contact </Link >
                            </li>
                            <li>
                                <Link className="link" smooth={true} to='faq'> <QuestionAnswer style={{ marginBottom: '-9px' }} /> FAQ </Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>


    );
};

export default Navbar;
