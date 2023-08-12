import React from "react";
import Intencard  from './IntenshipCard';
import { useEffect, useRef, useState } from 'react';
import Image  from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';



export const Cardslider = () => {
    let [scrollcard,setscrollcard]=useState(0);
    const containerRef = useRef();
    const handlescrollLeft=()=>{
        containerRef.current.scrollLeft -= 500;
   }

   const handlescrollRight=()=>{
       containerRef.current.scrollLeft += 500;
   }
    const cardData = [

        { Title: 'UI/UX Design', Description: 'This UX/UI internship will teach you how to create a web and mobile designs for e-Commerce web & apps. It will also teach you how to take a clients business objectives and turning them into intuitive, effective designs.', Rating: 4.5, likeCount_: 12, url: Image },
        { Title: 'Python Intern', Description: 'This python internship will improve your problem-solving skills by making projects on real world problems. It will also improve your basic knowledge about data analytics, analysis and some python frameworks.', Rating: 4.5, likeCount_: 12, url: Image },
        { Title: 'JAVA Intern', Description: 'Java internship will teach you how to develop android applications and software by making projects on real world problems. It will also improve your basic knowledge about how to maintain java-based components and interfaces..', Rating: 4.5, likeCount_: 12, url: Image },
        { Title: 'Machine Learning', Description: 'Our machine learning internship will offer you to enhance your skills by doing real life example projects. This internship will increase your knowledge in the field of data and algorithms to understand how a machine learns.', Rating: 4.5, likeCount_: 12, url: Image },
        { Title: 'Artificial Intelligence', Description: 'Our Artificial intelligence internship will offer you to enhance your skills by doing real life example projects. This internship will also teach you how a machine act like a human by training using Dataset..', Rating: 4.5, likeCount_: 12, url: Image },
        { Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', Rating: 4.5, likeCount_: 12, url: Image },
    ];

    return (
        <div className="container_">
           <button className="slider-icon left" onclick={(e)=>handlescrollLeft(e)}> left</button>
            <div className="cards-container_" style={{scrollLeft:scrollcard}} ref={containerRef}>
                {cardData.map((card) => (
                    <Intencard  CardData={card}/> 
                ))} 
            </div>
            <button className="slider-icon right" onclick={(e)=>handlescrollRight(e)}> right </button>
        </div>
    );
}

export default Cardslider;