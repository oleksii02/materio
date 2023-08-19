import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Grid, InputAdornment} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
    palette: {
        primary: {main: '#9155FD', contrastText: '#fff'},

    },
});

const country = [
    {value: 'Australia'},
    {value: 'Canada'},
    {value: 'France'},
    {value: 'United Kingdom'},
    {value: 'United States'},]

const language = [
    {value:'Arabic'},
    {value:'English'},
    {value:'French'},
    {value:'German'},
    {value:'Portuguese'},
]
const currency = [
    {value:'USD'},
    {value:'EUR'},
    {value:'Pound'},
    {value:'Bitcoin'},
]

const timezone =[
    {value:'(GMT-12:00) International Date Line West'},
    {value:'(GMT-11:00) Midway Island, Samoa'},
    {value:'(GMT-10:00) Hawaii'},
    {value:'(GMT-09:00) Alaska'},
    {value:'(GMT-08:00) Pacific Time (US & Canada)'},
    {value:'(GMT-08:00) Tijuana, Baja California'},
    {value:'(GMT-07:00) Chihuahua, La Paz, Mazatlan'},
    {value:'(GMT-07:00) Mountain Time (US & Canada)'},
    {value:'(GMT-06:00) Central America'},
    {value:'(GMT-06:00) Central Time (US & Canada)'},
    {value:'(GMT-06:00) Guadalajara, Mexico City, Monterrey'},
    {value:'(GMT-06:00) Saskatchewan'},
    {value:'(GMT-05:00) Bogota, Lima, Quito, Rio Branco'},
    {value:'(GMT-05:00) Eastern Time (US & Canada)'},
    {value:'(GMT-05:00) Indiana (East)'},
    {value:'(GMT-04:00) Atlantic Time (Canada)'},
    {value:'(GMT-04:00) Caracas, La Paz'},
]

export default function ValidationTextFields() {
    return (<ThemeProvider theme={theme}><Box
        component="form"
        sx={{
            '& .MuiGrid-root': {
                m: 0,
                minWidth: '100%',
                '@media (min-width: 600px)': {minWidth: '50%', flexBasis: '50%'}
            },
            '& .MuiGrid-item': {padding: '0 0 1.25rem 1.25rem',},
            '& .MuiTextField-root': {
                minWidth: '100%', flexBasis: '50%',
            },
        }}
        noValidate
        autoComplete="off"
    >
        <Grid container spacing={1} style={{width: '100%',}}>
            <Grid item xs={6}>
                <TextField
                    label="First Name"
                    defaultValue="John"
                    placeholder="John"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField

                    label="Last Name"
                    defaultValue="Doe"
                    placeholder="Doe"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField

                    label="Email"
                    defaultValue="john.doe@example.com"
                    placeholder="john.doe@example.com"

                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label='Organization'
                    defaultValue='ThemeSelection'
                    placeholder="ThemeSelection"
                />

            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="number"
                    placeholder="202 555 0111"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">US (+1)</InputAdornment>,
                    }}
                    label='Phone Number'
                    defaultValue=''/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label='Address'
                    defaultValue=''
                    placeholder="Address"/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label='State'
                    defaultValue=''
                    placeholder="California"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="number"
                    label='Zip Code'
                    defaultValue=''
                    placeholder="231465"/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    select
                    label='Country'
                    defaultValue='Australia'
                    >
                    {country.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    select
                    label='Language'
                    defaultValue='English'>
                    {language.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    select
                    label='Timezone'
                    defaultValue='(GMT-04:00) Caracas, La Paz'
                    >
                    {timezone.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    select
                    label='Currency'
                    defaultValue='USD'>
                    {currency.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

        </Grid>

    </Box>
    </ThemeProvider>);
}
