import React from 'react';
import Tweet from "./Tweet";
import useStyles from "../styles";

const TweetList = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.tweetList}>
            {
                data.map(tweet => <Tweet tweet={tweet} />)
            }
        </div>
    );
};

export default TweetList;