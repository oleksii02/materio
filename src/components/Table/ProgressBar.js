import * as React from "react";
import clsx from "clsx";
import {createTheme} from "@mui/material/styles";
import {createStyles, makeStyles} from "@mui/styles";
import Stack from "@mui/material/Stack";

const defaultTheme = createTheme();
const useStyles = makeStyles(
    (theme) =>

        createStyles({

            root: {
                backgroundColor: 'rgb(244, 245, 250)',
                borderRadius: '48px',
                width: "80%",
                height: 6,
                marginRight: '1rem',

            },
            value: {
                color: 'rgba(58, 53, 65, 0.6)',
                fontSize: '1rem',
                wordBreak: 'keep-all'

            },
            bar: {
                height: "100%",
                borderRadius: '48px',
                backgroundColor: "rgba(145, 85, 253)",
            },
        }),
    {defaultTheme}
);


const ProgressBar = React.memo(function ProgressBar(props) {
    const {value} = props;
    const valueInPercent = value;
    const classes = useStyles();

    return (
        <div style={{minWidth: "130px", display: 'contents'}}>
            <Stack direction={'row'} style={{ alignItems:'center'}}>
                <div className={classes.root}>
                    <div
                        className={clsx(classes.bar,)}
                        style={{maxWidth: `${valueInPercent}%`}}
                    />

                </div>
                <div className={classes.value}>{`${valueInPercent.toLocaleString()}%`}</div>
            </Stack>


        </div>
    );
});
export default function RenderProgress({status = '11'}) {
    return <ProgressBar value={status}/>;
}
