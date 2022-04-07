import React from 'react';
import {theme} from "../theme";
import {Avatar, Box, Grid, IconButton, InputBase, Stack, styled, Typography} from "@mui/material";
import SearchField from "./SearchField";
import ChatList from "./ChatList";
import {Attachment, Delete, Send} from "@mui/icons-material";

const StyledInputBase = styled(InputBase)(({theme}) => ({}));

const ChatBody = () => {
    return (
        <Grid container sx={{
            background: theme.palette.primary.main,
            height: {xs: '90vh', md: '85vh'},
            width: {xs: '100vw', md: '80vw'},
            borderRadius: 2
        }}>
            <Grid item xs={3} md={3} sx={{
                background: theme.palette.primary.dark,
                color: "#fff",
                borderRadius: 2, p: 2
            }}>
                <SearchField/>
                <br/>
                <ChatList/>
            </Grid>
            <Grid item xs={9} sx={{color: "#fff"}}>
                <Box sx={{
                    background: '#1f222e',
                    width: {xs: '75vw', md: '60vw'},
                    p: {xs: 1, md: 1.5},
                    borderBottom: "1px solid #1f222e",
                    borderRadius: 2,
                    display: 'flex',
                    position:'fixed',
                    zIndex:1,
                    justifyContent: 'space-between'
                }}>
                    <Typography variant={'h5'}>Rafi</Typography>
                    <IconButton sx={{color: "#fff"}}>
                        <Delete/>
                    </IconButton>
                </Box>
                <Stack
                    direction={"column-reverse"}
                    justifyContent={"end"}
                    sx={{
                        height: {xs: '87vh', md: '85vh'},
                        overflowY:'scroll',
                        overflowX:"hidden",
                        '&::-webkit-scrollbar':{
                            width:0,
                        },
                    }}
                >
                    <Box sx={{
                        background: '#1f222e',
                        width: {xs: '75vw', md: '60vw'},
                        borderBottom: "1px solid #1f222e",
                        borderRadius: 2,
                        display: 'flex',
                        position:"fixed",
                        alignItems: 'center',
                        p: 1,
                        zIndex:1
                    }}>
                        <IconButton sx={{color: "#fff"}}>
                            <Attachment sx={{mx: 1}}/>
                        </IconButton>
                        <InputBase sx={{color: "inherit", p: 1}} placeholder={"Write your message"} fullWidth multiline/>
                        <IconButton sx={{color: "#fff"}}>
                            <Send sx={{ml: 1}}/>
                        </IconButton>
                    </Box>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1, mb:7}}

                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 1</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row-reverse"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 2</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 3</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 1</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row-reverse"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 2</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 3</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 1</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row-reverse"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 2</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 3</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 1</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row-reverse"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 2</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                    <Stack  direction="row"
                            alignItems="start"
                            spacing={2}
                            sx={{p:1}}
                    >
                        <Avatar/>
                        <Stack >
                            <Typography variant={"body1"} sx={{backgroundColor:theme.palette.secondary.main, borderRadius:2, p:1}}>Hello how are you? 3</Typography>
                            <Typography variant={"caption"}>a few minutes ago</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ChatBody;
