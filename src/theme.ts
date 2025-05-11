import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    netflix: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    netflix?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914', // Netflix red
      light: '#F40612',
      dark: '#B81D24',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#221F1F', // Netflix dark gray
      light: '#2F2F2F',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#141414', // Netflix background
      paper: '#181818', // Netflix card background
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
    netflix: {
      main: '#E50914',
      light: '#F40612',
      dark: '#B81D24',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h5: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h6: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    subtitle1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    subtitle2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      letterSpacing: '0.02em',
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      letterSpacing: '0.02em',
    },
    button: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 16px',
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#181818',
          borderRadius: 8,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 16,
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: '#2F2F2F',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#2F2F2F',
            borderRadius: 4,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#181818',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid #E50914',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default theme; 