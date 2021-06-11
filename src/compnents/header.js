import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from "./styles";
import {Typography} from "@material-ui/core";

const Header = ({title,icon, button}) => {

    const classes = useStyles()

    return (
        <div className={classes.mainHeader}>
            {icon}
            <Typography className={classes.mainHeaderTitle}>
                {title}
            </Typography>
            <div className={classes.routButton} >{button}</div>
        </div>
    );
};

export default Header;