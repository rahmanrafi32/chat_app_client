import React from 'react';
import {Avatar, Box, IconButton, Typography} from "@mui/material";

const ChatList = () => {
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', borderBottom: "1px solid black"}}>
                <IconButton sx={{p: {xs: 1.5, md: 2}}}>
                    <Avatar/>
                </IconButton>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Typography variant={"h6"}>Rafi</Typography>
                    <Typography variant={"caption"}>this is message</Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', borderBottom: "1px solid black"}}>
                <IconButton sx={{p: {xs: 1.5, md: 2}}}>
                    <Avatar/>
                </IconButton>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Typography variant={"h6"}>Rafi</Typography>
                    <Typography variant={"caption"}>this is message</Typography>
                </Box>
            </Box>
        </>
    );
};

export default ChatList;
