import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {Button, Divider, Link} from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import Header from "../../compnents/header";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import {GetAllTweets} from "../../api/TweetsApi";


const Home = (props) => {

    const onHashtag = () => {
        props.history.push('/hashtag');
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
            <Header title={'خانه'}/>
            <Divider/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <Divider className={classes.divider} />
            <TweetList data={tweets}/>
        </div>
    );
}

export default Home;