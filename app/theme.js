'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
    palette: {
        mode: 'light',
      },
      typography: {
        fontFamily: inter.style.fontFamily,
      },
      components: {
        MuiAlert: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.severity === 'info' && {
                backgroundColor: '#60a5fa',
              }),
            }),
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Deeper color on hover
              },
            },
          },
        },
      },
});

export default theme;
