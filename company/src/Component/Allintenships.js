import React from 'react';
import { Grid } from '@mui/material';
import Intenshipcard from './IntenshipCard'
import P1 from './pic/Using a yellow color palette and the various shades of yellow.jpg'
import P2 from './pic/Programming Language Python GitHub Inc_ Czech Republic PNG - Free Download-PhotoRoom.png-PhotoRoom.png';
import P3 from './pic/Java_logo_PNG8-PhotoRoom.png-PhotoRoom.png';
import P4 from './pic/PngItem_1576336.png';
import P5 from './pic/Future Artificial Intelligence Vector Hd Images, Artificial Intelligence, Intelligence, Artificial, Robot PNG Image For Free Download.jpg'
import P6 from  './pic/react-angularjs-vue-js-typescript-native.jpg'

const Allintenships = () => {

    const cardData = [

        { Title: 'UI/UX Design', Description: 'This UX/UI internship will teach you how to create a web and mobile designs for e-Commerce web & apps. It will also teach you how to take a clients business objectives and turning them into intuitive, effective designs.', Rating: 1.5, likeCount_: 10, url: P1 },
        { Title: 'Python Intern', Description: 'This python internship will improve your problem-solving skills by making projects on real world problems. It will also improve your basic knowledge about data analytics, analysis and some python frameworks.', Rating: 2.5, likeCount_: 15, url: P2 },
        { Title: 'JAVA Intern', Description: 'Java internship will teach you how to develop android applications and software by making projects on real world problems. It will also improve your basic knowledge about how to maintain java-based components and interfaces..', Rating: 2.5, likeCount_: 120, url: P3 },
        { Title: 'Machine Learning', Description: 'Our machine learning internship will offer you to enhance your skills by doing real life example projects. This internship will increase your knowledge in the field of data and algorithms to understand how a machine learns.', Rating: 4.5, likeCount_: 10, url: P4 },
        { Title: 'Artificial Intelligence', Description: 'Our Artificial intelligence internship will offer you to enhance your skills by doing real life example projects. This internship will also teach you how a machine act like a human by training using Dataset..', Rating: 3, likeCount_: 25, url: P5 },
        { Title: 'React Js', Description: 'React Js internship provides you the opportunity to learn how to create, build and maintain any website and apps. This internship will also improve your practical knowledge by doing hands-on projects.', Rating: 2, likeCount_: 22, url: P6 },
    ];

    return ( 
        <>
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ textAlign: 'center' }}>
                    Internships
                </h1>
                <Grid className='item'  container spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                     >
                    {
                        cardData.map((Object_, index) => {
                            return (
                                <Grid sx={12} item lg={4} md={6} >
                                    <Intenshipcard CardData={Object_} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>

        </>
    )
}

export default Allintenships