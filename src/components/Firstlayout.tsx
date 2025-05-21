'use client';
import { Box, Grid, keyframes, useTheme } from '@mui/system';
import { Typography } from '@mui/material';

function FirstLayout() {

    return (
        <Grid
            container
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 4,
            }}
        >
            <Box >

            </Box>

            <Box p={10} sx={{

            }}>

            </Box>
        </Grid>
    );
}

export default FirstLayout;
