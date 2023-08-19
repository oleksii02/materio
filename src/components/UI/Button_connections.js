import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const theme = createTheme({
    palette: {
        primary:{main: '#9155FD'},
    },
});


export default function Button_connections({variant="contained"}) {
    return (
           <ThemeProvider theme={theme}> <Button variant={variant} color='primary' style={{minWidth: '38px', width: '38px'}}><PersonOutlineIcon/></Button></ThemeProvider>

    );
}
