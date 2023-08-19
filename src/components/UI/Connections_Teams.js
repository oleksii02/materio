import React from 'react';
import './Styles_UI.css'
import LongMenu from "./LongMenu";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary:{main: '#9155FD'},
    },
});

function Connections_Teams({name, connections}) {
    return (
        <div className='connections'>
            <div className={'connection'}><span>{name}</span>
                <div className={'LongMenu'}><LongMenu name={name}/></div>
            </div>
            <div className={'connections__users'}>
                {connections.map((connections) => (
                    <div className={'connections__user'}>
                        <div className={'connections__names'}>
                            <div className={'connections__logo'}>
                            <img src={connections.logo}/>

                        </div>
                        <div className={'connections__name'}>
                            <p>{connections.name}</p>
                            <span>{connections.connections}</span>
                        </div>
                            </div>
                        <div>
                            {connections.button}
                        </div>
                    </div>))}
            </div>
            <div className={'button'}>
                <ThemeProvider theme={theme}>
                    <Button color="primary">View all {name}</Button>
                </ThemeProvider>
            </div>
        </div>);
}

export default Connections_Teams;
