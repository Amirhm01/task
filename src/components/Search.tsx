import React, { useState } from "react";
import { Box, InputBase, IconButton, Collapse } from "@mui/material";
import { SearchNormal } from "iconsax-react";
import theme from "@/canfig/theme/theme";

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                    cursor: "pointer",
                }}
            >
                <IconButton onClick={toggleOpen}>
                    <SearchNormal size={24} color="#666" />
                </IconButton>
                <Collapse in={isOpen} >
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            width: isOpen ? "300px" : "40px",
                            transition: " 0.5s",
                            borderBottom: "1px solid",
                            borderColor: theme.palette.primary.main,
                        }}
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                </Collapse>
            </Box>
        </Box>
    );
};

export default SearchBar;
