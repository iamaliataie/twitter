import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    root: {
        width: '20%',
        padding: '10px',
    },
    logoContainer: {
        width: '20%',
        marginRight: 10,
    },
    logo: {
        width: '100%',
    },
    brand: {
        color: theme.palette.primary.main,
        fontSize: '1.5rem',
        marginRight: 20,
    },
    hashtag: {
        fontSize: '1.5rem',
        marginTop: 50,
        marginBottom: 20,
    },
    hashtagParent: {
        width: '100%',
        justifyContent: "right",
        marginBottom: '10px',
        padding: '5px',
    },
    hashtagImageContainer: {
        width: '10%',
    },
    hashtagTitle:{
        marginRight: '10px',
        fontSize: '1.2rem',
        fontWeight: '600',
    },
    imgResponsive: {
        width: '100%',
    }
}));

export default useStyles;