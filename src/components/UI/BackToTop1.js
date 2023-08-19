import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import {styled} from "@mui/material/styles";
import BuyNow from "./BuyNow";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));

const ColorFab = styled(Fab)(({ theme }) => ({
    backgroundColor: '#9155FD',
    '&:hover': {
        backgroundColor: '#804ADF',
    },

    right: '1rem',
    bottom: '1.5rem',

}));

function ScrollTop1(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({

        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop1.propTypes = {
    children: PropTypes.element.isRequired
};

export default function BackToTop1(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Toolbar style={{minHeight:0}} id="back-to-top-anchor" />
                <Box>
                    {props.childComponent}

                </Box>
                <Box><BuyNow/></Box>
            <ScrollTop1>
                <ColorFab color="secondary" size="small" aria-label="scroll back to top">
                    <ArrowUpwardOutlinedIcon/>

                </ColorFab>
            </ScrollTop1>
        </React.Fragment>
    );
}
