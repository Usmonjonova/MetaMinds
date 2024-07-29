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
    const url = 'https://metamindsgroup.pythonanywhere.com/tests/subjects';
    const [subjects, setSubjects] = React.useState()

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0ODE2MjQzLCJpYXQiOjE3MjIyMjQyNDMsImp0aSI6ImM2MTJjZTZkYmUxZTRlYzJhMDYzNjU1MTFhNmIwYzQ3IiwidXNlcl9pZCI6NH0._vJgFPi0uUk0LKsEXgtiHubPDbD67-yEyg79hRMmVFk',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSubjects(data)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            console.log(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {
                subjects && subjects.map((subject) => (
                    <Card key={subject.id} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={cardImg}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {subject.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to={`/classroom/${subject.id}`}>More</Link>
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
}
