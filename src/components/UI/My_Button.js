import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const My_Button = styled(Button)(({theme}) => ({
    minWidth: '65px',
    minHeight: '40px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderRadius: '6px',
    marginRight:'1.25rem'
}));

const theme = createTheme({
    palette: {
        active: {main: '#9155FD', contrastText: '#fff'},
        not_active: {main: '#84828A'},
        error:{main: '#FF4B51',contrastText: '#fff'},

    },
});

export default function My_Buttons({color = 'active', variant = 'contained', icon, name}) {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <My_Button color={color} variant={variant}>{icon}{name}</My_Button>

            </Stack>
        </ThemeProvider>
    );
}
