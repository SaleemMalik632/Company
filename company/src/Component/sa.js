import React from 'react'
import { useRef } from 'react';

function Untitled() {
    const home = useRef(null);
    const About = useRef(null);
    const Services = useRef(null);
    const Internships = useRef(null);
    const Team = useRef(null);
    const Contact = useRef(null);
    const FAQ = useRef(null);

    const scrolDown = (ref) => {
        window.scrollTo({
            top: ref.current,
            behavior: 'smooth',
        });
    }




    return (
        <>
            <div>
                <div>
                    <li onClick={scrolDown(home)}>
                        home
                    </li>
                </div>
            </div>
            <div  style={{marginTop:'1000px'}} ref={home}>
               <h1>Home</h1>
            </div>



        </>
    )
}

export default Untitled