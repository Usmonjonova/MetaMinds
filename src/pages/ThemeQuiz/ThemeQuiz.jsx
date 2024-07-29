import { Box, Button } from '@mui/material'
import React from 'react'
import { Article, Quiz, BookOnline } from '@mui/icons-material'
import Learn from '../../components/classroom/Learn'
import QuizText from '../../components/classroom/Quiz'
import Match from '../../components/classroom/Match'

const ThemeQuiz = () => {
    return (
        <div>
            <div className='theme-title-wrapper'>
                <h1>Takrorlash</h1>
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