import React from 'react';
import './Navbar.css'

import TranslateIcon from '@mui/icons-material/Translate';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountMenu from "../Menu/AccountMenu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar(props) {
    return (<Box className={'Navbar'}
    sx={{
        '& .MuiButton-root':{
            minWidth:'40px',
        }
    }}>
        <div className={'Navbar__Content'}>
            <div className={'Navbar__Name'}>
                <Button disabled>
                    <MenuRoundedIcon />
                    <span></span>
                </Button>
                    <Button disabled>
                        <SearchOutlinedIcon/>
                        <span></span>
                    </Button>


            </div>
            <div className={'Navbar__Group'}>
                <Button disabled>
                    <TranslateIcon/>

                    <span></span>
                </Button>
                <Button disabled>
                    <Brightness4OutlinedIcon/>

                    <span></span>
                </Button>
                <Button disabled>
                    <GridViewIcon/>

                    <span></span>
                </Button>
                <Button disabled>

                    <span className={'point'}>
                        <NotificationsNoneOutlinedIcon/>
                        <span></span>
                    </span>

                    <span></span>
                </Button>
                <span className={'Logo'}
                >
                    <span><div></div></span>
                    <AccountMenu/>

                    </span>
            </div>
        </div>

    </Box>);
}

export default Navbar;
