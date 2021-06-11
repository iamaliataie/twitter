import React, {useEffect} from 'react';
import useStyles from "../styles";
import {Button, Divider, Grid, IconButton} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import axios from "axios";
import {NewTweetRequest} from "../../../api/TweetsApi";
const NewTweet = () => {

    const input = React.useRef()

    React.useEffect(() => {
        input.current.addEventListener("input", function (e) {
            console.log(e.target.innerText)
        }, false)
    }, [])

    const classes = useStyles()

    const tweetClick = () => {
        const TweetText = input.current.innerText;

        const data = {
            "id": Math.ceil(Math.random() * 1000),
            "sender": {
                "name": "ثریا گل رضایی",
                "username": "surayagulrezaie"
            },
            "text": TweetText,
            "like": 20
        }

        NewTweetRequest(data,(isOk)=> {
            if(!isOk)
                alert("ثبت توییت با مشکل روبرو شده است")
            else
                alert("توییت شما با موفقیت ثبت شد")
        })

    }
        return (
            <div className={classes.newTweetRoot}>
                <Grid container direction={'column'} alignItems={'center'}>
                    <Grid item container>
                        <img src={'images/icon.png'} className={classes.newTweetImage}/>
                        <div contentEditable className={'newTweetArea'} data-placeholder={'توییت کنید...'} ref={input}>
                        </div>
                    </Grid>
                    <Grid item container direction={"row-reverse"} alignItems={'center'}>
                        <Button color={"primary"} variant={"contained"} className={classes.newTweetButton}
                                onClick={tweetClick}>توییت کنید</Button>
                        <IconButton className={classes.newTweetIconButton}>
                            <ImageIcon className={classes.imageIcon}/>
                        </IconButton>
                    </Grid>

                </Grid>
            </div>
        );
    }

export default NewTweet;