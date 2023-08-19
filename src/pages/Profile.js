import {Box, Grid, Paper} from "@mui/material";
import My_Paper from "../components/UI/My_Paper";
import My_Buttons from "../components/UI/My_Button";
import "./Profile.css"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import Connections_Teams from "../components/UI/Connections_Teams";
import Button_connections from "../components/UI/Button_connections";
import Button_teams from "../components/UI/Button_teams";
import BuyNow from "../components/UI/BuyNow";
import {FmdGoodOutlined} from "@mui/icons-material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import EnhancedTable from "../components/Table/Table";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import GridViewIcon from "@mui/icons-material/GridView";




const connections = [{
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png',
    name: 'Cecilia Payne',
    connections: '45 Connections',
    button: <Button_connections variant='outlined'/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/3.png',
    name: 'Curtis Fletcher',
    connections: '1.34k  Connections',
    button: <Button_connections/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/4.png',
    name: 'Alice Stone',
    connections: '125 Connections',
    button: <Button_connections/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/5.png',
    name: 'Darrell Barnes',
    connections: '456 Connections',
    button: <Button_connections variant='outlined'/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/6.png',
    name: 'Eugenia Moore',
    connections: '1.2k Connections',
    button: <Button_connections variant='outlined'/>
}]

const teams = [{
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/react-label.png',
    name: 'React Developers',
    connections: '72 Members',
    button: <Button_teams color={'rgb(255, 76, 81)'} name={'Developer'}/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/support-label.png',
    name: 'Support Team',
    connections: '122 Members',
    button: <Button_teams color={'rgb(145, 85, 253)'} name={'Support'}/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/figma-label.png',
    name: 'UI Designer',
    connections: '7 Members',
    button: <Button_teams color={'rgb(22, 177, 255)'} name={'Designer'}/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/vue-label.png',
    name: 'Vue.js Developers',
    connections: '289 Members',
    button: <Button_teams color={'rgb(255, 76, 81)'} name={'Developer'}/>
}, {
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/twitter-label.png',
    name: 'Digital Marketing',
    connections: '24 Members',
    button: <Button_teams color={'grey'} name={'Marketing'}/>
},]

function Profile() {
    return (<div className="Profile">
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <My_Paper
                        Comtent={<div className={'Banner'}>
                            <img
                                src={'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/pages/profile-banner.png'}/>
                            <div className={"Banner__Content"}>
                                <img
                                    src={'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png'}/>
                                <div className={'Banner__User'}>
                                    <div className={'Banner__Name'}>
                                        <h5>John Doe</h5>
                                        <div className={'Banner__Info'}>
                                            <div><InvertColorsIcon/><p>UX Designer</p></div>
                                            <div><FmdGoodOutlined/><p>Vatican City</p></div>
                                            <div><CalendarTodayIcon/><p>Joined April 2021</p></div>
                                        </div>
                                    </div>
                                    <My_Buttons
                                        icon={<HowToRegOutlinedIcon/>}
                                        name={<span>Connected</span>}
                                    />

                                </div>
                            </div>

                        </div>}/>
                </Grid>
                <Grid item xs={12} sx={{marginTop: '1.25rem',display:'flex',marginLeftRight:'1.25rem'}}>
                    <My_Buttons
                        icon={<PersonOutlineOutlinedIcon/>}
                        name={'Profile'}
                    />
                    <My_Buttons
                        icon={<PeopleOutlineRoundedIcon/>}
                        name={'TEAMS'}
                        color={'not_active'} variant={'text'}/>
                    <My_Buttons
                        icon={<GridViewIcon/>}
                        name={'PROJECTS'}
                        color={'not_active'} variant={'text'}/>
                    <My_Buttons
                        icon={<LinkOutlinedIcon/>}
                        name={'CONNECTIONS'}
                        color={'not_active'} variant={'text'}/>
                </Grid>

            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>

                    <My_Paper
                        Comtent={<Box className={'info'}>
                            <span>ABOUT</span>
                            <div><PersonOutlineIcon/>&nbsp;<p>Full Name:</p>&nbsp; <span>John Doe</span></div>
                            <div><CheckIcon/>&nbsp; <p>Status:</p>&nbsp; <span>Active</span></div>
                            <div><StarBorderIcon/>&nbsp; <p>Role:</p>&nbsp; <span>Developer</span></div>
                            <div><FlagOutlinedIcon/>&nbsp; <p>Country:</p> &nbsp;<span>USA</span></div>
                            <div><TranslateOutlinedIcon/>&nbsp; <p>Language:</p> &nbsp;<span>English</span></div>
                            <span>CONTACTS</span>
                            <div><CallOutlinedIcon/>&nbsp; <p>Contact:</p> &nbsp;<span>(123) 456-7890</span></div>
                            <div><ChatBubbleOutlineOutlinedIcon/>&nbsp; <p>Skype:</p>&nbsp; <span>John.doe</span></div>
                            <div><EmailOutlinedIcon/>&nbsp; <p>Email:</p>&nbsp; <span>John.doe@example.com</span></div>
                            <span>TEAMS</span>
                            <div><p>Backend Developer</p>&nbsp; <span>(126 Members)</span></div>
                            <div><p>React Developer</p>&nbsp; <span>(98 Members)</span></div>

                        </Box>}/>
                    <My_Paper
                        Comtent={<Box className={'info'}>
                            <span>OVERVIEW</span>
                            <div><CheckIcon/>&nbsp; <p>Task Complied:</p> &nbsp;<span>13.5k</span></div>
                            <div><PersonOutlineIcon/>&nbsp; <p>Connections:</p>&nbsp; <span>897</span></div>
                            <div><GridViewIcon/>&nbsp; <p>Projects Compiled</p>&nbsp; <span>146</span></div>


                        </Box>}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <My_Paper
                        Comtent={<div className={'Activity'}>
                            <div className={'Activity__Timeline'}>
                                <div>
                                    <TimelineOutlinedIcon/>
                                </div>
                                <div className={'Activity__name'}>
                                    <span>Activity Timeline</span>
                                </div>
                            </div>
                            <div className={'Activity__list'}>
                                <ul>
                                    <li>
                                        <div className={'list'}>
                                            <span className={'list__one'}></span>
                                            <span className={'list__two'}></span>
                                        </div>
                                        <div className={"News"}>
                                            <div className={'News__name'}>
                                                <p>8 Invoices have been paid</p>
                                                <span>Wednesday</span>
                                            </div>
                                            <p className={'News__info'}>Invoices have been paid to the company.</p>
                                            <div className={'News__img'}>
                                                <img
                                                    src={'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/file-icons/pdf.png'}/>
                                                <h6>invoice.pdf</h6>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div className={'list'}>
                                            <span className={'list__three'}></span>
                                            <span className={'list__two'}></span>
                                        </div>
                                        <div className={"News"}>
                                            <div className={'News__name'}>
                                                <p>Create a new project for client 😎</p>
                                                <span>Aprill, 18</span>
                                            </div>
                                            <p className={'News__info'}>Invoices have been paid to the company.</p>
                                            <div className={'News__img'}>
                                                <img
                                                    src={'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png'}/>
                                                <h6>John Doe (Client)</h6>
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div className={'list'}>
                                            <span className={'list__four'}></span>
                                            <span className={'list__two'}></span>
                                        </div>
                                        <div className={"News"}>
                                            <div className={'News__name'}>
                                                <p>Order #37745 from September</p>
                                                <span>Junuary,10</span>
                                            </div>
                                            <p className={'News__info'}>Invoices have been paid to the company.</p>


                                        </div>
                                    </li>
                                    <li>
                                        <div className={'list'}>
                                            <span className={'list__five'}></span>
                                        </div>
                                        <div className={"News"}>
                                            <div className={'News__name'}>
                                                <p>Public Meeting</p>
                                                <span>September, 30</span>
                                            </div>

                                        </div>
                                    </li>
                                </ul>

                            </div>


                        </div>}/>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <My_Paper
                                Comtent={<Connections_Teams
                                    name={'Connections'}
                                    connections={connections}/>}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <My_Paper
                                Comtent={<Connections_Teams
                                    name={'Teams'}
                                    connections={teams}/>}/>
                        </Grid>
                        <Grid item xs={12}>
                            <My_Paper
                                Comtent={<div><EnhancedTable/></div>}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
        <BuyNow/>

    </div>);
}

export default Profile;
