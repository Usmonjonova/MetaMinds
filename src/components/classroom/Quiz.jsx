import React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = React.useState({
        type: '',
        count: '',
        level: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'type') {
            setFormValues({
                ...formValues,
                [name]: typeof value === 'string' ? value.split(',') : value
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    };

    const handleSubmit = () => {
        if (formValues.type != '' && formValues.count != '' && formValues.count != '') {
            navigate(`/quizType`, { state: { formValues } });
        }
    };

    return (
        <div id='#quiz'>
            <h4 className="box-title mb-0 fw-500">Quiz</h4>
            <hr />
            <div className="lesson-text mb-30 text-fade">
                <p></p>
                <form className='form-wrapper'>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            name="type"
                            value={formValues.type}
                            label="Type"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Multiple Choice'}>Multiple Choice</MenuItem>
                            <MenuItem value={'Short Answer'}>Short Answer</MenuItem>
                            <MenuItem value={'TrueFalse'}>True/False</MenuItem>
                        </Select>
                    </FormControl>
                    <div className='age-none'>
                        <FormControl sx={{ m: 1, width: 200 }}>
                            <InputLabel id="demo-simple-select-helper-label">Level</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                name="level"
                                value={formValues.level}
                                label="Level"
                                onChange={handleChange}
                            >
                                <MenuItem value={'easy'}>easy</MenuItem>
                                <MenuItem value={'medium'}>medium</MenuItem>
                                <MenuItem value={'hard'}>hard</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 200 }}>
                            <InputLabel id="demo-simple-select-helper-label">Count</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                name="count"
                                value={formValues.count}
                                label="Count"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button className='quiz-button' variant="contained" onClick={handleSubmit}>Go Quiz 🚀</Button>
                </form>
            </div>
        </div>
    );
}

export default Quiz;
