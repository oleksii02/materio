import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function My_Paper({Comtent}) {
    return (<Box
        sx={{
            marginTop:'1.5rem',
            p:0,
            display: 'flex', '& > :not(style)': {
                width: 1, height: 1, type: 'elementType',
            },
        }}
    >
        <Paper elevation={3}>
            {Comtent}
        </Paper>

    </Box>);
}
