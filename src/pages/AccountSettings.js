import React from 'react';
import './AccountSettings.css'
import My_Buttons from "../components/UI/My_Button";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import My_Paper from "../components/UI/My_Paper";
import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import icon_logo from '../components/imgs/img.png';
import ValidationTextFields from "../components/Text Field /Text_Field";


function AccountSettings(props) {
    return (<div className={'AccountSettings'}>
        <div className={'button__group'}>
            <My_Buttons color={'active'} variant={'contained'} icon={<PermIdentityOutlinedIcon/>} name={'ACCOUNT'}/>
            <My_Buttons color={'not_active'} variant={'text'} icon={<LockOpenOutlinedIcon/>} name={'SECURITY'}/>
            <My_Buttons color={'not_active'} variant={'text'} icon={<BookmarkBorderOutlinedIcon/>}
                        name={'BILLING'}/>
            <My_Buttons color={'not_active'} variant={'text'} icon={<NotificationsNoneOutlinedIcon/>}
                        name={'Notifications'}/>
            <My_Buttons color={'not_active'} variant={'text'} icon={<LinkOutlinedIcon/>} name={'Connections'}/>
        </div>

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={12}><My_Paper Comtent={<div className={'Form'}>
                    <div className={'Form__Photo'}>
                        <img src={icon_logo}/>
                        <div className={'Upload'}>
                            <div>
                                <My_Buttons color={'active'} variant={'contained'} name={'Upload New Photo'}/>
                                <My_Buttons color={'not_active'} variant={'outlined'} icon={''} name={'RESET'}/></div>

                            <span>Allowed PNG or JPEG. Max size of 800K.</span>
                        </div>
                    </div>
                    <div className={'TextFields'}>
                        <ValidationTextFields/>

                    </div>
                    <div className={'Upload'}>
                        <div>
                            <My_Buttons color={'active'} variant={'contained'} name={'Save Changes'}/>
                            <My_Buttons color={'not_active'} variant={'outlined'} icon={''} name={'RESET'}/>
                        </div>
                    </div>
                </div>}/></Grid>
                <Grid item xs={12}><My_Paper Comtent={<div className={'Delete'}>
                    <div className={'Delete__Account'}>
                        <span>
                            Delete Account
                        </span>
                    </div>
                    <div>
                        <form>
                            <FormControlLabel control={<Checkbox color={'secondary'} />} label="I confirm my account deactivation" />
                            <My_Buttons color={'error'} variant={'contained'} icon={''} name={'Deactivate Account'}/>
                        </form>
                    </div>

                </div>}/></Grid>

            </Grid>
        </Box>
    </div>);
}

export default AccountSettings;
