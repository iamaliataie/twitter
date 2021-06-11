import React, {useEffect, useState} from 'react';
import TweetList from "./components/TweetList";
import useStyles from "./styles";
import {Button, Divider} from "@material-ui/core";
import Header from "../../compnents/header";
import {VerifiedUser} from "@material-ui/icons";
import axios from "axios";
import {GetAllTweets} from "../../api/TweetsApi";


const TweetsByHashtag = (props) => {

    const onHashtag = () => {
        props.history.push('/');
    }

    const classes = useStyles()

    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        GetAllTweets((isOk, data) => {
            if(!isOk)
                alert("NOT OK")
            else
                setTweets(data)
        })
    },[]);

    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={'/images/hashtag.png'} className={classes.pageHashtag}/>}
                    button={<Button onClick={onHashtag}>خانه</Button>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetsByHashtag;