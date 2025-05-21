// components/DrawerHeader.tsx
'use client';

import { styled } from '@mui/material/styles';

const DrawerHeaderRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 0),
    ...theme.mixins.toolbar,
}));

export default function DrawerHeader() {
    return <DrawerHeaderRoot />;
}
