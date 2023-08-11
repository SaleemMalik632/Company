import React from 'react'
import { Grid, Paper } from '@mui/material'
import Image3 from './smiling-young-pretty-student-girl-wearing-back-bag-holding-using-laptop-isolated-orange-wall.jpg'
import ImageListItem from '@mui/material/ImageListItem';

const AboutUs = () => {
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ backgroundColor: "#D5F5E3" }}>AboutUs</h1>
                <Grid container justifyContent="center" spacing={12} className='caintainer'>
                    <Grid xs={12} item lg={4} margin={2}>
                        <p>At Bharat Intern, we are passionate about empowering innovations that shape a better future for businesses and individuals alike.</p>
                        <Paper elevation={5} className='page' >
                            <div style={{ margin: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>Connects students with internships:</span>
                                Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                            </div>
                            <div style={{ margin: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>Gives students experience, skills, and a network:</span>
                                Internships can give students valuable experience in their field. They can also help students develop new skills and build a network of contacts
                            </div>
                            <div style={{ margin: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>Is a great way to start your career:</span>
                                Internships can be a great way to start your career. They can help you gain experience, skills, and a network that can help you land your first job
                            </div>
                        </Paper>
                    </Grid>
                    <Grid xs={12} item lg={4} margin={2} >
                        <ImageListItem>
                            <img className='Image-About' src={Image3} alt='Loading...' />
                        </ImageListItem>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AboutUs