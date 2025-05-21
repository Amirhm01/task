'use client';

import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {store} from '@/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/canfig/theme/theme';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}
