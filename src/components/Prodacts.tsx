'use client';

import { useEffect, useState } from "react";
import {Button, Box, Typography, CircularProgress, Card} from "@mui/material";
import theme from "@/canfig/theme/theme";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const ProductsApp = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products?limit=10&skip=10"
                );
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading)
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "teal.main",
                    fontSize: "1.25rem",
                }}
            >
                <CircularProgress color="primary" />
                <Typography ml={2}>Loading...</Typography>
            </Box>
        );

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                },
                gap: 2,
                padding: 4,
            }}
        >

            {products.map((product) => (
                <Card
                    key={product.id}
                    sx={{
                        bgcolor: "white",
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: theme.palette.divider,
                        transition: "all 0.2s ease",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={product.thumbnail}
                            alt={product.title}
                            sx={{ width: "50%", height: "auto", objectFit: "fill" }}
                        />
                    </Box>


                    <Box  sx={{ p: 3 ,}}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 1, fontWeight: "bold", color: "grey.900" }}
                        >
                            {product.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "grey.600",
                                mb: 2,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {product.description}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                my={2}
                                variant="subtitle1"
                                sx={{ color: "teal.main", fontWeight: "600" , }}
                            >
                                ${product.price}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "teal.main",
                                width: "100%",
                                "&:hover": {
                                    bgcolor: "teal.dark",
                                },
                                borderRadius: "9999px",
                                px: 3,
                                py: 1,
                                textTransform: "none",
                                boxShadow: 2,
                            }}
                        >
                            Buy Now
                        </Button>
                    </Box>



                </Card>
            ))}




        </Box>
    );
};

export default ProductsApp;
