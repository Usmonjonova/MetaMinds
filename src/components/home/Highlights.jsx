import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

const items = [
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Personalized learning',
        description:
            'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Personalized learning',
        description:
            'Created by experts, Muallim AI’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Tools to empower teachers',
        description:
            'With Muallim AI, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.',
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