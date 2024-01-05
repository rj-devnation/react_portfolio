import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../pages/Home/Home.css'

const About = () => {

    return (
        <Box>
            <Grid container display={'flex'} justifyContent="center" alignItems="stretch" spacing={2}>
                <Grid item xs={4} display={'inline-block'}>
                    <h1>Just a kid living out his childhood dream</h1>
                </Grid>
                <Grid item xs={8} className='about-content' display={'inline-block'}>
                        <p>"Inspect Element" was the gateway to my fascination of software development.</p> 
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;