import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logoImage from '../../assets/logo.png'

function ResourceCard({logoImage,title,content}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logoImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ResourceCard;