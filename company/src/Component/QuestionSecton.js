import React from 'react';
import { Grid, ImageListItem } from '@mui/material';
import Image from "./young-lady-with-finger-chin-yellow-jacket-looking-thoughtful-front-view-fotor-bg-remover-2023081225822.png";
import AllQuestion from './AllQuestion';



const QuestionSecton = () => {
    return (
        <>
            <div style={{marginTop:'100px'}}>
                <h1 style={{ textAlign: 'center' }}>FAQ</h1>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6} sx={6} md={6}>
                        <ImageListItem>
                            <img src={Image} style={{ margin: '10px' }} alt='Loading...' />
                            
                        </ImageListItem>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={6} md={6} >
                        <AllQuestion />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default QuestionSecton