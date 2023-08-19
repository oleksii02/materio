import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const options = [
    'Details',
    'Archive',

];

const ITEM_HEIGHT = 48;

export default function Actions_Menu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '12ch',
                        padding: '0px 0px',
                        margin:'0px',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option}  onClick={handleClose} style={{justifyContent:'center'}}>
                        {option}
                    </MenuItem>

                ))}
                <hr style={{borderColor:'rgba(58, 53, 65, 0.12)', borderWidth:'0px 0px thin'}}/>
                <MenuItem key={'Delete'}  onClick={handleClose} style={{justifyContent:'center', color:'red'}}>
                    Delete
                </MenuItem>

            </Menu>
        </div>
    );
}
