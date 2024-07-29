import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../../assets/images/cardImg.png'

const Match = () => {
    return (
        <div id='#match' className='match-wrapper'>
            <h4 className="box-title mb-0 fw-500">Match</h4>
            <hr />
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
                            Ready?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Match all the terms with their definitions as fast as you can. Avoid wrong matches, they add extra time!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link> Share</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Match