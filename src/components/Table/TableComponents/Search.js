import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {createTheme,ThemeProvider} from "@mui/material/styles";
import './Search.css'

// .MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline

const theme = createTheme({
    palette: {
        primary:{main: '#9155FD'},
    },
});



export default function Search() {

    return (<ThemeProvider theme={theme}>
            <div className={'Box'}>
                <p>Search:</p>
                <Box
                    component="form"
                    sx={{
                        padding: 0,

                        '& > :not(style)': { m: 0, width: '25ch',},
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label=''
                               size={'small'}
                               style={{padding:'0px'}}
                               sx={{p: 0 }}


                    />

                </Box>
            </div>

        </ThemeProvider>
    );
}
