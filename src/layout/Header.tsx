'use client';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HambergerMenu, ArrowRight2 } from 'iconsax-react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { layoutSelectors, toggleMenu } from '@/store/layoutSlice';
import DrawerHeader from '@/components/DrawerHeader';

interface AppBarProps {
    open?: boolean;
}

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(4, 0),
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header() {
    const theme = useTheme();
    const open = useSelector(layoutSelectors.isOpenMenu);
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleMenu());

    return (
        <>
            <AppBar position="fixed" open={open} sx={{ backgroundColor: theme.palette.background.default, boxShadow: 0 }}>
                <Toolbar>
                    <IconButton edge="start" sx={{ mr: 2 }} onClick={handleToggle}>
                        <motion.div
                            initial={false}
                            animate={open ? 'open' : 'closed'}
                            variants={{
                                closed: { rotate: 0 },
                                open: { rotate: 180 },
                            }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        >
                            {open ? (
                                <ArrowRight2 size="40" color={theme.palette.primary.main} variant="Bold" />
                            ) : (
                                <HambergerMenu size="40" color={theme.palette.primary.main} variant="Bold" />
                            )}
                        </motion.div>
                    </IconButton>

                    <Box
                        gap={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'left',
                            width: '100%',
                        }}
                    >
                        {!open && <Typography variant="h6">Mini variant drawer</Typography>}
                        <SearchBar />
                    </Box>
                </Toolbar>
            </AppBar>
            <DrawerHeader />
        </>
    );
}
