import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    root: {
        width: '25%',
        padding: '10px 20px',
    },
    profileText: {
        direction: "ltr",
        width: "max-content",
        marginLeft: "10px",
    },
    profileName: {
        flex: 1,
        margin: 0,
    },
    profileUsername: {
        flex: 1,
        margin: 0,
        color: theme.palette.text.hint,
        fontSize: '.8rem',
    },
    tweeterRoot: {
        backgroundColor: '#f5f8fa',
        padding: ' 10px 20px',
        borderRadius: '20px',
        marginTop: '50px',
        overflow: 'hidden',
    },
    tweeterRootTitle: {
        fontSize: '1.3rem',
        fontWeight: '700',
        marginBottom: 10,
    },
    users: {
        margin: '10px 0',
    },
    usersProfileText: {
        direction: "rtl",
        width: "80%",
    },
    usersButton: {
        textAlign: 'right',
    }
}));

export default useStyles;