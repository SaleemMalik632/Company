import React from 'react'
import { Grid, Paper } from '@mui/material'

const AboutUs = () => {
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ backgroundColor: "#D5F5E3", marginBottom: '0px', minHeight: '50px', padding: '70px' }}>AboutUs</h1>
                <Grid container
                    justifyContent="center"
                    spacing={12} className='caintainer' height={800} >
                    <Grid xs={12} item lg={4}>
                        <p>At Bharat Intern, we are passionate about empowering innovations that shape a better future for businesses and individuals alike.</p>
                        <Paper elevation={5} sx={{ padding: '20px'}} > 
                            <div style={{margin:'5px'}}>
                                <span style={{ fontWeight: 'bold' }}>Connects students with internships:</span>
                                Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                            </div>
                            <div style={{margin:'5px'}}>
                                <span style={{ fontWeight: 'bold' }}>Connects students with internships:</span>
                                Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                            </div>
                            <div style={{margin:'5px'}}>
                                <span style={{ fontWeight: 'bold' }}>Connects students with internships:</span>
                                Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                            </div>

                        </Paper>
                    </Grid>
                    <Grid xs={12} item lg={4}  >
                        <Paper>
                            <p>this is me </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AboutUs