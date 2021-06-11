import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";
import axios from "axios";
import {Link} from "react-router-dom";
import {BestUsers} from "../../api/TweetsApi";

const Users = ({name, username}) => {

    const classes = useStyles();
    const urlName = name.replace(' ', '-')

    return <ButtonBase className={classes.usersButton}>

        <Link to={`/user/${urlName}`} >
        <Grid container direction={"row"} alignItems={'center'} className={classes.users}>
        <img src={'/images/icon.png'} style={{width: '20%'}}/>
        <Grid item container direction={'column'}
              className={classes.usersProfileText}>
            <Typography className={classes.profileName}>
                {name}
            </Typography>
            <Typography className={classes.profileUsername}>
                {username}@
            </Typography>
        </Grid>
    </Grid>
        </Link>
    </ButtonBase>
}

const LeftSidebar = () => {

    const classes = useStyles()

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        BestUsers((isOk, data) => {
            if(!isOk)
                alert("users faild")
            else
                setUsers(data)
        })
    },[]);

    return (
        <div className={classes.root}>
            {/* user profile */}
            <Grid container direction={"row-reverse"} alignItems={'center'}>
                <img src={'/images/icon.png'} style={{width: '20%'}}/>
                <Grid item container direction={'column'}
                    className={classes.profileText}>
                    <Typography className={classes.profileName}>
                        Ali Ahmad Ataie
                    </Typography>
                    <Typography className={classes.profileUsername}>
                        @iamaliataie
                    </Typography>
                </Grid>

            </Grid>
            {/* popular users */}
            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterRootTitle}>کاربران برتر</Typography>
                <Divider style={{marginRight: -30, marginLeft: -30, height: 2}} />
                {
                    users.map((item, index) => {
                        return <>
                            <Users name={item.name} username={item.username} />
                            { index !== users.length - 1 &&
                            <Divider/>
                            }
                        </>
                        }
                    )
                }
            </Grid>
        </div>
    );
};

export default LeftSidebar;