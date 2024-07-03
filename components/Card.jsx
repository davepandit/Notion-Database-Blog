'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

export default function MediaCard({title, id, author, createdAt, coverImage}) {
    //instance
    const router = useRouter()    
    const url = `/blogs/${id}?author=${author}&createdAt=${createdAt}`
    const redirectToBlogPage = () => {
        //this pushes the url into the history 
        router.push(url)
    }
  return (
    <Card sx={{  width: '250px' }}>
      <CardMedia
        sx={{ height: '150px' }}
        image={coverImage}
        title="notion"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
        sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem', // Adjust this value as needed
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        sx={{
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Deeper color on hover
      },
    }}
        onClick={redirectToBlogPage}>View</Button>
      </CardActions>
    </Card>
  );
}
