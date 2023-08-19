import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Actions_Menu from "./Actions_Menu";
import RenderProgress from "./ProgressBar";
import Team from "./Team";
import Name from "./Name";
import Search from "./TableComponents/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {lime, purple} from '@mui/material/colors';

function createData(name, leader, team, status, actions) {
    return {name, leader, team, status, actions};
}

const rows = [createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/vue-label.png',
    date: '10 May 2021',
    name: 'Website SEO'
}, 'Eileen', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/3.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/4.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png'], 38, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/social-label.png',
    date: '03 Jan 2021',
    name: 'Social Banners'
}, 'Owen', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/5.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/6.png'], 45, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/sketch-label.png',
    date: '12 Aug 2021',
    name: 'Logo Designs'
}, 'Keith', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 92, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/sketch-label.png',
    date: '19 Apr 2021',
    name: 'IOS App Design'
}, 'Merline', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/6.png',], 56, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/figma-label.png',
    date: '08 Apr 2021',
    name: 'Figma Dashboards'
}, 'Harmonia', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 25, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/html-label.png',
    date: '29 Sept 2021',
    name: 'Crypto Admin'
}, 'Allyson', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 36, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/react-label.png',
    date: '20 Mar 2021',
    name: 'Create Website'
}, 'Georgie', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 72, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/xd-label.png',
    date: '09 Feb 2021',
    name: 'App Design'
}, 'Fred', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 89, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/figma-label.png',
    date: '17 June 2021',
    nemes: 'Angular APIs'
}, 'Richardo', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 77, '1'), createData({
    logo: 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/vue-label.png',
    date: '06 Oct 2021',
    nemes: 'Admin Template'
}, 'Genevra', ['https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/7.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/8.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png', 'https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/2.png'], 100, '1'),];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


const headCells = [{id: 'name', numeric: false, disablePadding: false, label: 'NAME', width: 200}, {
    id: 'leader', numeric: false, disablePadding: false, label: 'LEADER', width: 100
}, {id: 'team', numeric: false, disablePadding: false, label: 'TEAM', width: 100}, {
    id: 'status', numeric: false, disablePadding: false, label: 'STATUS', width: 100
}, {id: 'actions', numeric: false, disablePadding: false, label: 'ACTIONS', width: 50},];

function EnhancedTableHead(props) {
    const {classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (<TableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox

                    className={classes.root}
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{'aria-label': 'select all desserts'}}
                />
            </TableCell>
            {headCells.map((headCell) => (<TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                <TableSortLabel
                    style={{width: `${headCell.width}px`}}
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                    {headCell.label}
                    {orderBy === headCell.id ? (<span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>) : null}
                </TableSortLabel>
            </TableCell>))}
        </TableRow>
    </TableHead>);
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2), paddingRight: theme.spacing(1),
    },
    title: {

        flex: '1 1 100%',
    },

}));


const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar


        >
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Projects
            </Typography>
            <Search/>


        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '&.MuiTableCell-root': {
            padding: '6px',
        }, '&.Mui-checked': {
            color: 'rgb(145, 85, 253)',
        }, color: 'grey',
    }, paper: {
        width: '100%',
    }, table: {
        minWidth: 700,
    }, visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },

    tableRowRoot: {
        "&$tableRowSelected, &$tableRowSelected:hover": {
            backgroundColor: 'rgb(242,235,255)'
        }
    }, tableRowSelected: {
        backgroundColor: 'rgb(242,235,255)'
    }

}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1),);
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (<div className={classes.root}>
        <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={selected.length}/>
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead

                        className={classes.root}
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (<TableRow
                                    classes={{
                                        root: classes.tableRowRoot, selected: classes.tableRowSelected,
                                    }}
                                    hover

                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.name}
                                    selected={isItemSelected}
                                >
                                    <TableCell className={classes.root}>

                                        <Checkbox
                                            onClick={(event) => handleClick(event, row.name)}
                                            className={classes.root}
                                            checked={isItemSelected}
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </TableCell>
                                    <TableCell component="div" id={labelId} scope="row" className={classes.root}>
                                        <Name name={row.name}/>
                                    </TableCell>
                                    <TableCell align="left" className={classes.root}>{row.leader}</TableCell>
                                    <TableCell align="left" className={classes.root}><Team team={row.team}/></TableCell>
                                    <TableCell align="left" className={classes.root}><RenderProgress
                                        status={row.status}/></TableCell>
                                    <TableCell align="center" className={classes.root}><Actions_Menu/></TableCell>
                                </TableRow>);
                            })}
                        {emptyRows > 0 && (<TableRow color={'primary'} style={{height: (dense ? 33 : 53) * emptyRows}}>
                            <TableCell colSpan={6}
                            />
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 7, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </div>);
}
