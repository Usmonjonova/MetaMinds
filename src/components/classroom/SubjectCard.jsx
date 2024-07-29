import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cardImg from '../../assets/images/cardImg.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MultiActionAreaCard() {
    const url = 'https://metamindsgroup.pythonanywhere.com/tests/subjects/';

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMjMwODE2MSwiaWF0IjoxNzIyMjIxNzYxLCJqdGkiOiJhODcyMzNkMTg4MjA0YTIzYjkwMmRkMjBlZjA1MzJjNiIsInVzZXJfaWQiOjR9.5KDzs0_738yF_EfX6fnMPsydkg52OzN1LW6WA3_La58',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            console.log(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Matematika
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/classroom/${'matematika'}`}>More</Link>
                </Button>
            </CardActions>
        </Card>
    );
}
