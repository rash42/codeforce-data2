import React from "react";
import './Tiles.css'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

function Tiles(props) {
    const navigate = useNavigate()
    const theme = useTheme()
    console.log(theme.mode)
    return (
        // <div className="card text-white bg-dark mb-3 len18 col-sm">
        //     <div className="card-body">
        //         <h5 className="card-title">{props.name}</h5>
        //         <p className="card-text">{props.text}</p>
        //         <button className="btn btn-light" onClick={()=>navigate(props.link)}>Let's explore!</button>
        //     </div>
        // </div>
        //This is a comment
        <Card sx={{
            width: 275,
            background: (theme) => theme.palette.custom.light,
            color: (theme) => theme.palette.custom.contrastText,
            ":hover" : {
                transform: "translate3D(0,-1px,0) scale(1.04)",
            }
        }}
            elevation={theme.mode === 'dark' ? 24 : 4}>
            <CardContent sx={{ height: 160 }}>
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
            <CardActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
                <Button size="small" onClick={() => navigate(props.link)} sx={{ background: 'white' }}>Explore More</Button>
            </CardActions>
        </Card>
    )
}

export default Tiles