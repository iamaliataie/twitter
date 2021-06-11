import React, {useEffect, useState} from 'react';
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {Link} from "react-router-dom";
import axios from "axios";
import {TrendingHashtags} from "../../api/TweetsApi";

const RightSidebar = () => {

    const classes = useStyles();

    const [hashtags, setHashtags] = useState([])

    useEffect(()=>{
        TrendingHashtags((isOk, data)=>{
            if(!isOk)
                return alert("hashtags error")
            setHashtags(data)

        })
    },[])


    return (
        <div className={classes.root}>
            {/* logo */}
                <Link to={"/"}>
            <Grid container alignItems={'center'}>
                <Grid item className={classes.logoContainer}>
                <img src={'/images/twitter.png'} className={classes.logo}/>
                </Grid>
                <Grid item>
                <Typography className={classes.brand}>
                    توییتر فارسی
                </Typography>
                </Grid>
            </Grid>
                </Link>
            {/* Hashtags */}
            <Typography className={classes.hashtag}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container>
                <Grid item container alignItems={'center'}>
                    {
                        hashtags.map(item => <ButtonBase className={classes.hashtagParent}>
                            <Link to={'/hashtag/'+item}>
                                <Grid container={true} item={true}>
                            <Grid item className={classes.hashtagImageContainer}>
                                <img src={'/images/hashtag.png'} className={classes.imgResponsive}/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.hashtagTitle}>
                                    {item}
                                </Typography>
                            </Grid>
                        </Grid>
                            </Link>
                        </ButtonBase>
                        )
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default RightSidebar;