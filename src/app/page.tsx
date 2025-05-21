'use client';
import React from "react";
import ProductsApp from "@/components/Prodacts";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { layoutSelectors } from "@/store/layoutSlice";  // مسیر درست رو بذار

export default function Home() {
    const drawerWidth = 250;
    const open = useSelector(layoutSelectors.isOpenMenu);

    return (
        <Box
            component="main"
            sx={(theme) => ({
                flexGrow: 1,
                p: 3,
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(9)} + 1px)`,
            })}
        >
            <ProductsApp />
        </Box>
    );
}
