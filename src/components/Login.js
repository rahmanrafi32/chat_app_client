import React from 'react';
import {Grid, Stack, styled, TextField, Typography} from "@mui/material";
import {theme} from "../theme";
import {LockOpen} from "@mui/icons-material";

const StyledTextField = styled(TextField)(({theme}) => ({
    margin: 10,
    '& .MuiInputLabel-root':{
        color: theme.palette.secondary.main,
    },
    '& label.Mui-focused': {
        color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
        color: theme.palette.secondary.main,
        '& fieldset': {
            borderColor: theme.palette.secondary.light,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.secondary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.secondary.main,
        },
    },
}));

const Login = () => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} sx={{
            background: theme.palette.primary.main,
            height: {xs: '90vh', md: '70vh'},
            width: {xs: '100vw', md: '50vw'},
            borderRadius: 2
        }}>
            <Grid items>
                <Stack alignItems={"center"} justifyContent={"space-between"} sx>
                    <LockOpen sx={{color: theme.palette.secondary.main, fontSize: 50}}/>
                    <Typography variant={"h3"} sx={{color: theme.palette.secondary.main, p: 2}}>Login</Typography>
                    <StyledTextField
                        label="Enter Your Email"
                        color="secondary"
                    />
                    <StyledTextField
                        label="Enter Your Password"
                        color="secondary"
                    />
                </Stack>
            </Grid>

        </Grid>
    );
};

export default Login;
