import React, {useEffect, useState} from 'react';
import TweetList from "./components/TweetList";
import useStyles from "./styles";
import {Button, Divider} from "@material-ui/core";
import Header from "../../compnents/header";
import {VerifiedUser} from "@material-ui/icons";
import axios from "axios";
import {GetAllTweets} from "../../api/TweetsApi";


const TweetsByUser = (props) => {

    const name = props.match.params.user.replace('-', ' ')

    const onHashtag = () => {
        props.history.push('/');
    }

    const classes = useStyles()

    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        GetAllTweets((isok, data)=>{
            if(!isok)
                alert("something wrong")
            else
                setTweets(data)
        })
    },[]);

    return (
        <div className={classes.root}>
            <Header title={name} icon={<img src={'/images/hashtag.png'} className={classes.pageHashtag}/>}
                    button={<Button onClick={onHashtag}>خانه</Button>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>
        </div>
    );
};

export default TweetsByUser;