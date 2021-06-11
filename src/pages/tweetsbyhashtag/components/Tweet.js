import React from 'react';
import useStyles from "../styles";
import {Grid, IconButton, Typography} from "@material-ui/core";
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Tweet = ({tweet}) => {

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, '<a href="/hashtag/$&" style="color: cornflowerblue"> $& </a>')}
    }

    const classes = useStyles();

    return (
            <Grid container className={classes.userTweetRoot}>
                <Grid item className={classes.userImageArea}>
                    <img src={'/images/icon.png'} width={'100%'}/>
                </Grid>
                <Grid container item direction={'column'} className={classes.userTextArea}>
                    <Grid item container direction={"column"} className={classes.userInfo}>
                        <Typography className={classes.userFullName}>
                            {tweet.sender.name}
                        </Typography>
                        <Typography className={classes.username}>
                            {tweet.sender.username}@
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography dangerouslySetInnerHTML={renderTweet(tweet.text)} className={classes.userTweet}>

                        </Typography>
                    </Grid>
                    <Grid container direction={"row-reverse"} alignItems={"center"} className={classes.tweetButtons}>
                        <IconButton className={classes.tweetButton}>
                            <RepeatIcon></RepeatIcon>
                        </IconButton>
                        <IconButton className={classes.tweetButton}>
                            <FavoriteIcon className={classes.imageIcon}></FavoriteIcon>
                        </IconButton>
                        <Typography>
                            {tweet.like}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    );
};

export default Tweet;