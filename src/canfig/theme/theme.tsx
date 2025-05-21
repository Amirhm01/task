// src/theme.ts
import { createTheme } from '@mui/material/styles';
const sharedButtonStyles = {
    color: '#fff',
    transition: '.3s',
    '&:hover': {
        backgroundColor: '#ffffff',
        color: '#FF5E00',
        scale: '1.05'
    },
};
const theme = createTheme({
    typography: {
        fontFamily: '"Vazir", "Roboto", "Arial", sans-serif',
        allVariants: {
            color: '#1A120B',
        },
    },
    palette: {
        primary: {
            main: '#FF5E00',
        },
        secondary: {
            main: '#2d2d2d',
        },
        background: {
            default: '#fffdfa', // رنگ پیش‌فرض پس‌زمینه
            paper: '#F6F6F6',   // رنگ پس‌زمینه برای کاغذ (کارت‌ها و دیگر المان‌ها)
        },

    },
    // ...
    components: {
        MuiButton: {
            styleOverrides: {
                root: sharedButtonStyles,
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    ...sharedButtonStyles,
                    padding: '8px',
                },
            },
        },
    },

});

export default theme;
