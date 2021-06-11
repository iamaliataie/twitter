import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    root: {
        flex: 1,
        height: '100vh',
        overflow: "auto",
    },
    mainHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: 15,
    },
    mainHeaderTitle: {
        fontSize: '1.5rem',
        marginRight: 10,
        fontWeight: '600',
    },
    homeLogo: {
        fontSize: '2rem',
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: theme.palette.primary.main,
    },
    newTweetRoot: {
        display: 'flex',
        padding: 15,
    },
    newTweetArea: {
        flex: 1,
        border: "none",
        outline: "none",
        resize: "none",
    },
    newTweetButton: {
        borderRadius: '20px',
        color: '#ffffff',
    },
    newTweetIconButton: {
        marginLeft: '20px',
        border: '1px solid gray',
        padding: '5px',
    },
    imageIcon: {
        color: '#ff0000',
    },
    tweetList: {
        backgroundColor: '#f5f8fa',
        paddingTop: 10,
        paddingBottom:1,
    },

    userTweetRoot: {
        display: 'flex',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
    },
    userImageArea: {
        width: '10%',
        position: 'relative',
    },
    userTextArea: {
        flex: 1,
        marginRight: 10,
    },
    userInfo: {
        marginBottom: 10,
    },
    userFullName: {
        marginLeft: 20
    },
    username: {
        color: theme.palette.text.hint,
        fontWeight: 'bold',
    },
    userTweet: {
        fontWeight: "normal",
        fontSize: '.9rem',
    },
    tweetButtons: {
        marginTop: 20,
    },
    tweetButton: {
        border: '1px solid gray',
        padding: 5,
        marginRight: 10,
    },
    pageHashtag: {
        width: '5%',
    }
}));

export default useStyles;