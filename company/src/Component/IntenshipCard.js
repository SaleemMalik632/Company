import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { ThumbUpAlt } from '@mui/icons-material';
import { useState } from 'react';



export default function ImgMediaCard({ CardData }) {
  const [likeCount, setLike] = useState(CardData.likeCount_);
  const [Checklike, SetChecklike] = useState(false);

  const setLike_ = () => {
    if (!Checklike) {
      setLike(likeCount + 1);
    }
    else {
      setLike(likeCount - 1);
    }
    SetChecklike(!Checklike);
  }



  return (
    <>
      <CardActions>
        <Card sx={{ maxWidth: 300, margin: '10px', textAlign: 'justify' }}>
          <CardMedia component="img" image={CardData.url} alt="green iguana" height={200} />
          <CardContent>
            <Typography gutterBottom variant="h5"  color="primary"component="div" sx={{ textAlign: 'center' }}>
              {CardData.Title}
            </Typography>
            <Typography variant='body' >
              {CardData.Description}
            </Typography>
          </CardContent>
          <CardActions> 
            <Rating name="rating" defaultValue={CardData.Rating}> </Rating>
            <Button startIcon={<ThumbUpAlt />} onClick={setLike_}> {likeCount} Likes</Button>
          </CardActions>
          <CardActions>
            <Button variant="outlined" sx={{
              '&:hover': {
                backgroundColor: '#1976d2', // Color when hovered
                color:'white'
              },
              '&:focus': {
                backgroundColor: '#0d47a1', // Color when focused
                color:'white'
              },
            }}>Apply Now</Button>
          </CardActions>
        </Card>
      </CardActions>

    </>

  );
}
