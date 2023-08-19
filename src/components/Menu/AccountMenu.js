import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';


import icon_logo from '../imgs/img.png';

import './AccountMenu.css'
import {Link} from "@mui/material";


export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };
    return (<React.Fragment>
        <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ml: 2}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <div>
                        <img
                            src={icon_logo}/>
                    </div>

                </IconButton>
            </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0, sx: {
                    color: 'rgba(58, 53, 65, 0.87)',
                    fontSize: '1.375rem',
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiSvgIcon-root': {
                        marginRight: '0.5rem'
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
            <div className={'BoxLogo'}>
                    <span className={'Logo'}>
                    <span><div></div></span>
                    <div><img src={icon_logo}/></div>

                    </span>
                <div className={'Logo__Name'}>
                    <p className={'one'}>John Doe</p>
                    <p className={'two'}>Admin</p>
                </div>
            </div>
            <Divider/>
            <Link href='/' underline="none" color={'rgba(58, 53, 65, 0.87)'}>
            <MenuItem onClick={handleClose}>
                <PersonOutlineOutlinedIcon/> Profile
            </MenuItem>
            </Link>
            <MenuItem onClick={handleClose} disabled>
                <EmailOutlinedIcon/> Inbox
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
                <ChatBubbleOutlineOutlinedIcon/> Chat
            </MenuItem>
            <Divider/>
            <Link href='/account_settings' underline="none" color={'rgba(58, 53, 65, 0.87)'}>
            <MenuItem onClick={handleClose}>
                <Settings/>
                Settings
            </MenuItem>
            </Link>
            <MenuItem onClick={handleClose} disabled>
                <AttachMoneyOutlinedIcon/>
                Pricing
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
                <HelpOutlineRoundedIcon/>
                FAQ
            </MenuItem>
            <Divider/>

            <MenuItem onClick={handleClose} disabled>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    </React.Fragment>);
}
