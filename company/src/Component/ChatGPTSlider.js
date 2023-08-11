import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import PersonCardLeft from './PersonCardLeft';
import PersonCardMiddle from './PersonCardMiddle';
import PersonCardRight from './PersonCardRight';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card as active

  const handleSlideLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleSlideRight = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Button onClick={handleSlideLeft}>Left</Button>
        {activeIndex === 0 && <PersonCardLeft />}
        {activeIndex === 1 && <PersonCardMiddle />}
        {activeIndex === 2 && <PersonCardRight />}
        <Button onClick={handleSlideRight}>Right</Button>
      </Grid>
    </Container>
  );
};

export default Slider;
