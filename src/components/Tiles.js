import React from "react";
import './Tiles.css'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Tiles(props) {
    const navigate = useNavigate()
    return (
        // <div className="card text-white bg-dark mb-3 len18 col-sm">
        //     <div className="card-body">
        //         <h5 className="card-title">{props.name}</h5>
        //         <p className="card-text">{props.text}</p>
        //         <button className="btn btn-light" onClick={()=>navigate(props.link)}>Let's explore!</button>
        //     </div>
        // </div>
        //This is a comment
        <Card sx={{ width: 275 }} elevation={3}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                </Typography>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">

                </Typography>
                <Typography variant="body2">
                    {props.text}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>navigate(props.link)}>Explore More</Button>
            </CardActions>
        </Card>
    )
}

export default Tiles