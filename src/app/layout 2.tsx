'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import Providers from '@/canfig/Providers';
import Sidebar from '@/layout/Sidebar';
import Header from '@/layout/Header';
import DrawerHeader from "@/components/DrawerHeader";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Sidebar/>
                <main>{children}</main>
            </ThemeProvider>
        </Providers>
        </body>
        </html>
    );
}
