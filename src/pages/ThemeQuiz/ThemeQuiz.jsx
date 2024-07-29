import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Article, Quiz, BookOnline } from '@mui/icons-material'
import Learn from '../../components/classroom/Learn'
import QuizText from '../../components/classroom/Quiz'
import Match from '../../components/classroom/Match'

const ThemeQuiz = () => {
    // const url = `https://metamindsgroup.pythonanywhere.com/tests/subjects/${extractId(location.pathname)}/topics/`
    // const [topics, setTopics] = useState()

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0ODE2MjQzLCJpYXQiOjE3MjIyMjQyNDMsImp0aSI6ImM2MTJjZTZkYmUxZTRlYzJhMDYzNjU1MTFhNmIwYzQ3IiwidXNlcl9pZCI6NH0._vJgFPi0uUk0LKsEXgtiHubPDbD67-yEyg79hRMmVFk',

    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         setTopics(data)
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //         console.log(`Error: ${error.message}`);
    //     }
    // };


    return (
        <div>
            <div className='theme-title-wrapper'>
                <h1></h1>
                <Box sx={{ '& button': { m: 2 } }}>
                    <div>
                        <Button className='buttonQuizType' variant="contained" color="primary" size="large"><BookOnline className='quiz-margin' />Learn</Button>
                        <Button className='buttonQuizType' variant="contained" color="primary" size="large"><Article className='quiz-margin' />Quiz</Button>
                        <Button className='buttonQuizType' variant="contained" color="primary" size="large"><Quiz className='quiz-margin' />Match</Button>
                    </div>
                </Box>
            </div>
            <div>
                <Learn></Learn>
                <QuizText />
                <Match />
            </div>
        </div>
    )
}

export default ThemeQuiz