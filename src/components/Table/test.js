import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import clsx from "clsx";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import Actions_Menu from "./Actions_Menu";
import {Checkbox} from "@mui/material";


const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => ({
    root: {
        '&.MuiCheckbox-colorSecondary.Mui-checked':{
            color : 'rgb(145, 85, 253)',
            borderColor: 'red'
        },
        color:'grey',
        width: '100%',
    },

    tableRowRoot: {
        "&$tableRowSelected, &$tableRowSelected:hover": {
            backgroundColor: 'rgb(242,235,255)'
        }
    },
    tableRowSelected: {
        backgroundColor: 'rgb(242,235,255)'
    }

}));


const ProgressBar = React.memo(function ProgressBar(props ) {
    const { value } = props;
    const valueInPercent = value;
    const classes = useStyles();

    return (
        <div style={{width:"100%", display:'contents'}}>

            <div className={classes.root}>
                <div
                    className={clsx(classes.bar, )}
                    style={{ maxWidth: `${valueInPercent}%` }}
                />
            </div>

            <div className={classes.value}>{`${valueInPercent.toLocaleString()} %`}</div>

        </div>
    );
});
export function renderProgress(params) {
    return <ProgressBar value={Number(params.value)} />;
}
export function renderActions(params) {
    return <Actions_Menu/>

}

const columns = [
    { field: 'name', headerName: 'NAME', width: 200 },
    { field: 'leader', headerName: 'LEADER', width: 150 },
    { field: 'team', headerName: 'TEAM', width: 150,  },
    { field: 'status', headerName: 'STATUS',  width: 150, renderCell: renderProgress,

    },
    { field: 'actions', headerName: 'ACTIONS', width: 100, renderCell: renderActions},
];

const rows = [
    {id: 1, name: '1', leader: 'Eileen', team: '1', status: 38, actions: '1'},
    {id: 2, name: '1', leader: 'Owen', team: '1', status: 45, actions: '1'},
    {id: 3, name: '1', leader: 'Keith', team: '1', status: 92, actions: '1'},
    {id: 4, name: '1', leader: 'Merline', team: '1', status: 56, actions: '1'},
    {id: 5, name: '1', leader: 'Harmonia', team: '1', status: 25, actions: '1'},
    {id: 6, name: '1', leader: 'Allyson', team: '1', status: 36, actions: '1'},
    {id: 7, name: '1', leader: 'Georgie', team: '1', status: 72, actions: '1'},
    {id: 8, name: '1', leader: 'Fred', team: '1', status: 89, actions: '1'},
    {id: 9, name: '1', leader: 'Richardo', team: '1', status: 77, actions: '1'},
    {id: 10, name: '1', leader: 'Genevra', team: '1', status: 100 , actions: '1'}
];



export default function Table() {

    const classes = useStyles();
    return (
        <div style={{ height: 400, width: '100%'}}
        >
            <DataGrid

                className={classes.root}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 7, 10]}
                checkboxSelection
                disableRowSelectionOnClick

            />
            <Checkbox color="secondary"/>
        </div>
    );
}
