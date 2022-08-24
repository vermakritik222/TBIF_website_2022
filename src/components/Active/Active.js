import React from 'react'
import "./Active.css"
import image from "./startup_14.jpeg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function Active(props) {
    const{ img, name, description, contact, web}=props;
  return (
    // <div className='contain'>
    //     <div>
    //         <div className='b1'>
    //         <div className='img'>
    //             <img scr={image} alt="company"></img>
    //         </div>  
    //         </div>
    //         <div className='b2'>
    //         <div className='txt'>
    //             <div className='t1'>
    //                 <h4>{name}</h4>
    //             </div>
    //             <br></br>
    //             <div className='t2'>
    //                 <p>{description}</p>
    //             </div>
    //             <div className='t3'>
    //                 <p>{contact}</p>
    //             </div>
    //             <div className='button'>
    //                 <a href={web}>Visit Website</a>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
<Grid item xs={4}>
    <Card sx={{ maxWidth: 345 ,minWidth: 200, minHeight: 500}}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {contact}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={web}>Visit Website</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default Active