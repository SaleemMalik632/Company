import React from 'react';
import { Grid, Typography } from '@mui/material';
import Infopro from './Infopro';
import FollowUs from './FollowUs';
import FormsFooter from './FormsFooter';
import { Email, Place } from '@mui/icons-material';

const Footer = () => {
    return (
        <div style={{ background: "url('http://www.w3.org/2000/svg') repeat-x bottom" }}>
            <Grid container style={{ backgroundColor: "#D5F5E3", marginTop: '10px' }} spacing={2}>
                <Grid item lg={3} xs={12} md={6} >
                    <Infopro />
                </Grid>
                <Grid item lg={3} xs={12} md={6} >
                    <h3>Address</h3>
                    <address>
                        <Place color='primary' /> Address: 123 Main Street, City, Country
                    </address>
                    <a href="mailto:saleemalik444@gmail.com" style={{ textDecoration: 'none', color: '#008BD4' }}>
                        <Email /> saleemalik444@gmail.com
                    </a>
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                    <FollowUs />
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                    <FormsFooter />
                </Grid>
                <Grid item lg={12} xs={12} md={12}>
                    <Typography textAlign={'center'}>
                        Copyright © 2023 Infopro. All rights reserved by Infopro
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;


