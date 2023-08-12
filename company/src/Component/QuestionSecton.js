import React from 'react';
import { Grid, ImageListItem } from '@mui/material';
import Image from "./close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg";
import AllQuestion from './AllQuestion';


const QuestionSecton = () => {
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xl={12} lg={6}>
                    <ImageListItem>
                        <img className='Image-About' src={Image} alt='Loading...' />
                    </ImageListItem>
                </Grid>
                <Grid item xl={12} lg={6}>
                    <AllQuestion />
                </Grid>
            </Grid>
        </>
    )
}

export default QuestionSecton