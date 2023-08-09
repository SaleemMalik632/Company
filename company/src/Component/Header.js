import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { Menu, Home, Info, Work, People, Phone, QuestionAnswer } from '@mui/icons-material';
import { red } from "@mui/material/colors";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`main-header`} style={{ zIndex: 100 }}>
            <ul className={"main-head"}>
                <div>
                    <h3>infoPro</h3> 
                </div>
                <button class='class2'>  {<FaBars size={30} />}</button>
                <div class="class1">
                    <li> 
                        <Link className="link" to={'/home'}> {<Home style={{ marginBottom: '-9px' }} />} Home </Link>
                        <Link className="link" to={'/About'}> {<Info style={{ marginBottom: '-9px' }} />} About </Link>
                        <Link className="link" to={'/Services'}> {<Work style={{ marginBottom: '-9px' }} />} Services </Link>
                        <Link className="link" to={'/Internships'}> {<People style={{ marginBottom: '-9px' }} />} Internships </Link>
                        <Link className="link" to={'/Team'}>{<People style={{ marginBottom: '-9px' }} />}  Team </Link>
                        <Link className="link" to={'/Contact'}>{<Phone style={{ marginBottom: '-9px' }} />}  Contact  </Link>
                        <Link className="link" to={'/FAQ'}>{<QuestionAnswer style={{ marginBottom: '-9px' }} />}  FAQ </Link>
                    </li>
                </div> 
            </ul> 
        </nav>
    );
}; 
 
export default Navbar;
