import React, { Component } from "react";
import { Card, Typography, CardActions, CardContent, CardMedia } from '@mui/material';
import { Instagram, Facebook, WhatsApp } from '@mui/icons-material';
import Image from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";




const TeamCard = ({ CardData }) => {

    const phoneNumber = '03239954754';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    return (
        <>
            <CardActions>
                <Card s sx={{ width: 300, margin: '10px', textAlign: 'justify' }}>
                    <CardMedia component="img" image={CardData.url} alt="green iguana" height={200} />
                    <CardContent >
                        <Typography variant='h6' color="primary" style={{ marginTop: '10px' }} >
                            {CardData.Title}
                        </Typography>
                        <Typography variant='h5' color="primary" style={{ marginTop: '10px' }} >
                            {CardData.Name}
                        </Typography>
                        <Typography variant='body' component='div' style={{ marginTop: '10px' }}>
                            {CardData.Description}
                        </Typography>
                        <CardActions style={{ marginTop: '10px' }}>
                            <NavLink to='https://www.facebook.com/profile.php?id=100074689028925&mibextid=ZbWKwL' target="_blank" >  <FaFacebook className="facebook-icon" /></NavLink>
                            <NavLink to='https://instagram.com/its_______malik___632?igshid=ZDc4ODBmNjlmNQ==' target="_blank">  <FaInstagram className="facebook-icon" /> </NavLink>
                            <NavLink to={whatsappLink} target="_blank">  <FaWhatsapp className="facebook-icon" /> </NavLink>
                        </CardActions>
                    </CardContent>
                </Card>
            </CardActions>

        </>
    )
}

export default TeamCard
