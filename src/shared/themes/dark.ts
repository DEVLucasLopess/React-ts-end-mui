import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';
//config my theme work

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[500],
            contrastText: '#fff',
        },
        background: {
            default: '#303134', //cor de fundo
            paper: '#202124', //dentro de card
        }
    }
});