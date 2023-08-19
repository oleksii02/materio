import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import parse from 'parse-css-color'



const theme = createTheme({
    palette: {
        primary:{main: '#9155FD'},
        red:{main: 'rgb(255, 76, 81)'},
        purple:{main: 'rgba(145, 85, 253)'},
        blue:{main: 'rgb(22, 177, 255)'},
        grey:{main: 'rgb(138, 141, 147)'},

    },

});






export default function Button_teams({variant="contained", name,color}) {

    const  color11 = parse(color)

    const ColorButton = styled(Button)(({ theme }) => ({
        fontSize: '0.8125rem',
        height: '28px',
        maxWidth: "100%",
        borderRadius: '16px',
        color: color,
        backgroundColor: color11.type + 'a(' + color11.values.join(',') + ',' + 0.12 + ')',
        ':hover':{backgroundColor:color11.type + 'a(' + color11.values.join(',') + ',' + 0.12 + ')'}


    }));
    return (
        <ThemeProvider theme={theme}>
            <ColorButton onClick={()=>(console.log(color11))}>{name}</ColorButton>
        </ThemeProvider>

    );
}
