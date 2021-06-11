import {AxiosInstance} from "./api";
import axios from "axios";

export const GetAllTweets = (callback) =>{
    AxiosInstance().get("/tweets")
        .then(res => {
            callback(true, res.data)
        }).catch(err => {
            callback(false, err)
    })
}

export const NewTweetRequest = (data, callback) => {
    AxiosInstance().post("/tweets",data)
        .then(res => {
            callback(true)
        }).catch(err => {
            callback(false)
    })
}

export const BestUsers = (fallback)=>{
    AxiosInstance().get("/users")
        .then(res => {
            const data = res.data;
            fallback(true,data)
        }).catch(err =>{
            fallback(false,err)
    })
}

export const TrendingHashtags = (fallback)=>{
    AxiosInstance().get("/hashtags")
        .then(res => {
            const data = res.data;
            fallback(true,data)
        }).catch(err =>{
        fallback(false,err)
    })
}