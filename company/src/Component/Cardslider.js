import React from "react";
import Intencard from './IntenshipCard';
import Image from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';
import TeamCard from './TeamCard';



export const Cardslider = () => {

    const cardData = [
        { Name: 'Saleem Malik', Title: 'Founder', Description: 'Full Stack Develper In React and Not With Last 3 Year Expreiance |Machine Learning Specialist ', url: Image },
        { Name: 'Naveen Kumar', Title: 'Co-Founder ', Description: 'Human Resources | UX/UI Expert | Full Stack Developer | Program Manager |Machine Learning Specialist', url: Image },
        { Name: 'Vivek Kumar', Title: 'Co-Founder', Description: 'Data Analyst | Computer  Aided Design Specialist | Mechanical Engineering Program Manager', url: Image },
        { Name: 'Malik', Title: 'Co-Founder', Description: 'Front End Developer | Machine Learning Specialist | Content Writer |Machine Learning Specialist', url: Image },
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