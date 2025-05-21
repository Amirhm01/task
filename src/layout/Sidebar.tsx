'use client';
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    Home2,
    Box1,
    ShoppingCart,
    ReceiptText,
    Heart,
    User,
    Setting2,
    LogoutCurve
} from "iconsax-react";
import { useSelector } from 'react-redux';
import { layoutSelectors } from '@/store/layoutSlice';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: 500,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: 400,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(9)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        padding: theme.spacing(0, 3),
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    })
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 0),
    ...theme.mixins.toolbar,
}));

export default function Sidebar() {
    const theme = useTheme();
    const open = useSelector(layoutSelectors.isOpenMenu);
    const menuItems = [
        { name: 'Home', icon: <Home2 size="20" />, color: theme.palette.primary.main },
        { name: 'Products', icon: <Box1 size="20" />, color: theme.palette.secondary.main },
        { name: 'Cart', icon: <ShoppingCart size="20" />, color: theme.palette.info.main },
        { name: 'My Orders', icon: <ReceiptText size="20" />, color: theme.palette.warning.main },
        { name: 'Wishlist', icon: <Heart size="20" />, color: theme.palette.success.main },
        { name: 'Profile', icon: <User size="20" />, color: theme.palette.error.main },
        { name: 'Settings', icon: <Setting2 size="20" />, color: theme.palette.error.dark },
        { name: 'Logout', icon: <LogoutCurve size="20" />, color: theme.palette.text.secondary },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open} sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.background.default,
                    borderRight: 'none',
                    boxShadow: 'none',
                    margin: '0 1em 0 0',
                },
            }}>
                <DrawerHeader>
                    <Typography variant="h5" noWrap fontWeight="bold">
                        Modern Tech
                    </Typography>
                </DrawerHeader>
                <List sx={{ overflowY: 'scroll' }}>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            sx={{
                                display: 'block',
                                transition: '.2s',
                                '&:hover': {
                                    scale: '1.07',
                                },
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    borderRadius: '10px',
                                    m: 2,
                                    '&:hover': {
                                        backgroundColor: theme.palette.background.paper,
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                    {React.cloneElement(item.icon, { color: item.color })}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>


        </Box>
    );
}
