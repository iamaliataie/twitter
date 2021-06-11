import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
    },
    mainContent: {
        flex: '1',
        borderRight: '2px solid #5ea9dd',
        borderLeft: '2px solid #5ea9dd',
    },
    leftSidebar: {
        width: '25%',
    },
    divider: {
        width: '2px !important',
        height: "100%",
        backgroundColor: theme.palette.primary.main,
    }
}));

export default useStyles;