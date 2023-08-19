import React from "react";
import { Card, Typography, CardActions, CardContent, CardMedia } from '@mui/material';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";




const TeamCard = ({ CardData }) => {

    const phoneNumber = '032399454754';
    const whatsappMessage = 'Hello, I would like to get in touch with you.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <CardActions>
                <Card s sx={{ width: 300, margin: '10px', textAlign: 'justify' }}>
                    <CardMedia component="img" image={CardData.url} alt="green iguana" height={330} />
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
                            <a href='https://www.facebook.com/profile.php?id=100074689028925&mibextid=ZbWKwL' target="_blank" rel='noopener noreferrer' >  <FaFacebook className="facebook-icon" /></a>
                            <a href='https://instagram.com/its_______malik___632?igshid=ZDc4ODBmNjlmNQ==' target="_blank" rel='noopener noreferrer'>  <FaInstagram className="facebook-icon" /> </a>
                            <a href={`tel:${whatsappLink}`} target="_blank" rel='noopener noreferrer'>  <FaWhatsapp className="facebook-icon" /> </a>
                        </CardActions>
                    </CardContent>
                </Card>
            </CardActions>

        </>
    )
}

export default TeamCard
