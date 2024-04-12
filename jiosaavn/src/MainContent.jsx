import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const trends = [
  { title: 'Timeless Ghazals', artist: 'Various Artists', cover: 'path/to/cover1.jpg' },
  // ... other trending items
];

export default function MainContent() {
  return (
    <Grid container spacing={2}>
      {trends.map((trend, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={trend.cover}
              alt={trend.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {trend.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trend.artist}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
