
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1379BC',
    },
    secondary: {
      main: '#FBA500',
    },
    background: {
      default: '#ffff',
      paper: '#1C3245',
    },
  },
  typography: {
    h1: {
      fontSize: 'clamp(3.2rem, calc(3.2rem + ((1vw - 0.48rem) * 0.2778)), 3.4rem)',
      
      // Otros estilos específicos de h1 si es necesario
    },
    // Puedes definir estilos para otros elementos de texto como h2, p, etc., de manera similar
  },
});

export default theme;