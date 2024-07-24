import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Versatile Skills',
        description:
            'Our ideal candidate demonstrates a wide range of skills and can seamlessly adjust to various roles and responsibilities, enhancing overall team efficiency.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Proactive Problem-Solving',
        description:
            'We seek individuals who actively identify and address challenges, driving innovation and improvement within their projects.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Strong Communication',
        description:
            'Effective communication is key. Our candidates should be able to articulate ideas clearly and collaborate successfully with diverse teams.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Commitment to Excellence',
        description:
            'We value candidates who consistently strive for high standards in their work, ensuring top-quality outcomes in every task.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Adaptability to Change',
        description:
            'The ability to quickly adapt to new processes, technologies, and environments is crucial for our dynamic work setting.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Team-Oriented Approach',
        description:
            'We are looking for team players who contribute positively to the team environment and support collective goals with enthusiasm.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Highlights
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Our ideal candidates are versatile, proactive problem-solvers with strong communication skills. They are committed to excellence, adaptable to change, and thrive in team-oriented environments. If you excel in these areas, we’d love to hear from you!
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}