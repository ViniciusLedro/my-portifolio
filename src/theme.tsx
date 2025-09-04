import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffffff',
    },
    secondary: {
      main: '#38c958',
    },
  },


  typography: {
     h1: {
      fontSize: '6rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.3rem', 
    },
    fontFamily: [ 
        "Helvetica Neue",
    // "Arial",
    // "Sans-serif",
    // "Helvetica Neue",
    // "Roboto"
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme