import React from "react";
import Image from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';
import TeamCard from './TeamCard';
import P1 from './Team/p1.jpg';
import P2 from './Team/p2.jpg';
import P3 from './Team/p3.jpg';
import P4 from './Team/p4.jpg';




export const Cardslider = () => {

    const cardData = [
        { Name: 'Saleem Malik', Title: 'Founder', Description: 'Full Stack Develper In React and Node With Last 3 Year Expreiance |Machine Learning Specialist ', url: P1 },
        { Name: 'Naveen Kumar', Title: 'Co-Founder ', Description: 'Human Resources | UX/UI Expert | Full Stack Developer | Program Manager |Machine Learning Specialist', url: P2 },
        { Name: 'Vivek Kumar', Title: 'Co-Founder', Description: 'Data Analyst | Computer  Aided Design Specialist | Mechanical Engineering Program Manager', url: P3 },
        { Name: 'Aina Asif', Title: 'Co-Founder', Description: 'Front End Developer | Machine Learning Specialist | Content Writer |', url: P4 },
    ];

    return (
        <>
        <h1 style={{textAlign:'center'}} >MEET THE TEAM</h1>
            <div className="container_">
                <div className="cards-container_" >
                    {cardData.map((card) => (
                        <TeamCard CardData={card} />
                    ))}
                </div> 
            </div>
        </>
    );
}

export default Cardslider;