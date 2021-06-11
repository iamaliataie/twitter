import React from 'react';
import useStyles from "./styles";
import {Divider, Typography} from "@material-ui/core";
import RightSidebar from "../rightsidebar/RightSidebar";
import LeftSidebar from "../leftsidebar/LeftSidebar";
import Home from "../../pages/home/Home";
import TweetsByHashtag from "../../pages/tweetsbyhashtag/TweetsByHashtag";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import page404 from '../../pages/404/404'
import TweetsByUser from "../../pages/tweetsbyuser/TweetsByUser";

const Layout = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Route path={'/'} render={() => {
                    return <>
                    <RightSidebar/>
                    <div className={classes.mainContent}>
                        <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/hashtag/:hashtag'} component={TweetsByHashtag}/>
                        <Route exact path={'/user/:user'} component={TweetsByUser}/>
                        <Route component={page404} />
                        </Switch>
                    </div>
                    <LeftSidebar/>
                    </>
                }}/>
            </BrowserRouter>
        </div>
    );
}

export default Layout;