import { createMuiTheme } from '@material-ui/core/styles';

/**
 * This is used to override the default theme of Material-UI
 * with custom theme.
 */

const theme = createMuiTheme({
    typography: {
        // Use the Raleway font instead of the default Roboto font.
        fontFamily: [
            'Raleway',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        subheading: {
            fontSize: 14,
        },
    },
    palette: {
        primary: {
            main: '#502F93',
        },
        secondary: {
            main: '#4E92E3',
        },
    },
    status: {
        danger: '#d32f2f',
    }
});

export default theme;