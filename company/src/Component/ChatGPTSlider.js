import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import IntenshipCard from './IntenshipCard';
import Image  from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg';


const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(1); 
    const handleSlideLeft = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };
    const handleSlideRight = () => {
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };
    const cardData = {
        Title: 'Card Title',
        Description: 'This is a description of the card.',
        Rating: 4.5,
        likeCount_: 12,
        url: Image
    };
    const cardData2 = {
        Title: 'this is secode card ',
        Description: 'This is a description of the card.',
        Rating: 4.5,
        likeCount_: 12,
        url: Image
    };
    const cardDat3 = {
        Title: '',
        Description: 'This is a description of the card.',
        Rating: 4.5,
        likeCount_: 12,
        url: Image
    };
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                <Button onClick={handleSlideLeft}>Left</Button>
                {activeIndex === 0 && <IntenshipCard CardData={cardData} />}
                {activeIndex === 1 && <IntenshipCard CardData={cardData2} />}
                {activeIndex === 2 && <IntenshipCard CardData={cardDat3} />}
                <Button onClick={handleSlideRight}>Right</Button>
            </Grid>
        </Container>
    );
};

export default Slider;
