import tinyColor from 'tinycolor2'
const {createMuiTheme} = require("@material-ui/core");
const primaryColor = '#5ea9dd'

const Theme = createMuiTheme({
    typography:{
        fontFamily:[
            'Shabnam',
        ]
    },
    palette: {
        primary: {
            main: primaryColor,
            light: tinyColor(primaryColor).lighten().toHexString()
        }
    },
    overrides:{
        MuiTypography:{
            root:{
            }
        },

    },
});

export default Theme;