import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Home, Info, Work, People, Phone, QuestionAnswer } from '@mui/icons-material';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`main-header`} style={{ zIndex: 100 }}>
            <div className={"main-head"}>
                <div>
                    <h2>infoPro</h2>
                </div>
                <div className="icon" onClick={toggleMenu}>
                    <FaBars size={30} />
                </div>
                <div className={`nav-elements ${isMenuOpen && 'active'}` }>
                    <ul> 
                        <li>
                            <NavLink className="link" to={'/home'}> <Home style={{ marginBottom: '-9px' }} /> Home </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/About'}> <Info style={{ marginBottom: '-9px' }} /> About </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/Services'}> <Work style={{ marginBottom: '-9px' }} /> Services </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/Internships'}> <People style={{ marginBottom: '-9px' }} /> Internships </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/Team'}> <People style={{ marginBottom: '-9px' }} /> Team </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/Contact'}> <Phone style={{ marginBottom: '-9px' }} /> Contact </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to={'/FAQ'}> <QuestionAnswer style={{ marginBottom: '-9px' }} /> FAQ </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
