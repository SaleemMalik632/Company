import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Grid container style={{ backgroundColor: "#D5F5E3" }}  spacing={2}>
                <Grid item lg = {4} xs = {12}  md = {6} >
                    <h3>InfoPRO</h3> 
                    <div>
                    </div>
                </Grid>
                <Grid item lg = {4} xs = {12}  md = {6}>
                    <div>
                        Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.
                    </div>
                </Grid>
                <Grid item lg = {4} xs = {12}  md = {6}> 
                    <div>
                        Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer