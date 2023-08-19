import React, { useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Home, Info, Work, People, Phone, QuestionAnswer } from '@mui/icons-material';
import HomeSlider from './HomeSlider';
import BellowGrid from './BellowGrid';
import AboutUs from './AboutUs';
import Allintenships from './Allintenships';
import Slider from './Cardslider';
import QuestionSecton from './QuestionSecton';
import ChatBot from './ChatBot';
import Footer from './Footer';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const home = useRef(null);
    const About = useRef(null);
    const Services = useRef(null);
    const Internships = useRef(null);
    const Team = useRef(null);
    const Contact = useRef(null);
    const FAQ = useRef(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const scrolDown = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

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
                                <NavLink onClick={() => scrolDown(home)} className="link" to={'/home'}> <Home style={{ marginBottom: '-9px' }} /> Home </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(About)} className="link" to={'/About'}> <Info style={{ marginBottom: '-9px' }} /> About </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(Services)} className="link" to={'/Services'}> <Work style={{ marginBottom: '-9px' }} /> Services </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(Internships)} className="link" to={'/Internships'}> <People style={{ marginBottom: '-9px' }} /> Internships </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(Team)} className="link" to={'/Team'}> <People style={{ marginBottom: '-9px' }} /> Team </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(Contact)} className="link" to={'/Contact'}> <Phone style={{ marginBottom: '-9px' }} /> Contact </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => scrolDown(FAQ)} className="link" to={'/FAQ'}> <QuestionAnswer style={{ marginBottom: '-9px' }} /> FAQ </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <HomeSlider ref={home} />
            <BellowGrid ref={Services} />
            <AboutUs ref={About} />
            <Allintenships ref={Internships} />
            <Slider ref={Team} />
            <QuestionSecton ref={FAQ} />
            <ChatBot />
            <Footer ref={Contact} />
        </>
    );
};

export default Navbar;
