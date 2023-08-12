import React from 'react'
import { Card, Typography, CardActions, CardContent, CardMedia  } from '@mui/material';
import { Instagram, Facebook , WhatsApp } from '@mui/icons-material';
import Image  from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';


const TeamCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: 300, margin: '10px', textAlign: 'justify' }}> 
                <CardMedia component="img" image={Image} alt='Loading...' />
                <CardContent>
                    <Typography variant='h3' color="primary" >
                        Name here
                    </Typography>
                    <Typography variant='body' component='div'>
                        Description
                    </Typography>

                    <CardActions>
                        <Instagram />
                        <Facebook />
                        <WhatsApp /> 
                    </CardActions>
                </CardContent>
            </Card>
        </>
    )
}

export default TeamCard
