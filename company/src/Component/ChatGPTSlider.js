import Slider from "react-slick";
import "react-magic-slider-dots/dist/magic-dots.css";
import TeamCard from './TeamCard';



const StatusItems = () => {

    const cardData = [

        { Name: 'Malik', Title: 'UI/UX Design', Description: 'This UX/UI internship will teach you how to create a web and mobile designs for e-Commerce web & apps. It will also teach you how to take a clients business objectives and turning them into intuitive, effective designs.', url: Image },
        { Name: 'Malik', Title: 'Python Intern', Description: 'This python internship will improve your problem-solving skills by making projects on real world problems. It will also improve your basic knowledge about data analytics, analysis and some python frameworks.', url: Image },
        { Name: 'Malik', Title: 'JAVA Intern', Description: 'Java internship will teach you how to develop android applications and software by making projects on real world problems. It will also improve your basic knowledge about how to maintain java-based components and interfaces..', url: Image },
        { Name: 'Malik', Title: 'Machine Learning', Description: 'Our machine learning internship will offer you to enhance your skills by doing real life example projects. This internship will increase your knowledge in the field of data and algorithms to understand how a machine learns.', url: Image },
        { Name: 'Malik', Title: 'Artificial Intelligence', Description: 'Our Artificial intelligence internship will offer you to enhance your skills by doing real life example projects. This internship will also teach you how a machine act like a human by training using Dataset..', url: Image },
        { Name: 'Malik', Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', url: Image },
        { Name: 'Malik', Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', url: Image },
        { Name: 'Malik', Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', url: Image },
        { Name: 'Malik', Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', url: Image },
        { Name: 'Malik', Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', url: Image },
    ];
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <>
            <div style={{ width: "100%" }}>
                <Slider {...settings} >
                    {
                        cardData.map((card) => (
                            <TeamCard CardData={card} />
                        ))
                    }
                 </Slider>
            </div>
        </>


    );
};

export default StatusItems;
