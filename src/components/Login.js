import React from 'react';
import {Grid, Stack, styled, TextField, Typography} from "@mui/material";
import {theme} from "../theme";
import {LockOpen} from "@mui/icons-material";

const StyledTextField = styled(TextField)(({theme}) => ({
    '& .MuiInputLabel-root': {
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
        <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                background: theme.palette.primary.main,
                height: {xs: '90vh', md: '55vh'},
                width: {xs: '95vw', md: '40vw'},
                borderRadius: 2
            }}
        >
            <Grid items sx={{width: '50%'}}>
                <Stack
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={3}>
                    <LockOpen sx={{
                        color: theme.palette.secondary.main,
                        fontSize: 50
                    }}/>
                    <Typography variant={"h3"} sx={{color: theme.palette.secondary.main}}>Login</Typography>
                    <StyledTextField
                        label="Enter Your Email"
                        color="secondary"
                        fullWidth
                        helperText={"Please Enter a valid email"}
                        // error
                    />
                    <StyledTextField
                        label="Enter Your Password"
                        color="secondary"
                        fullWidth
                        helperText={"Please Enter a valid email"}
                        // error
                    />
                </Stack>
                <Typography variant={"caption"} sx={{color: theme.palette.secondary.main}}>Forget Password?</Typography>
                <Typography variant={"body2"} sx={{color: theme.palette.secondary.main, textAlign:"center", mt:6}}>Don't have an account? Sign Up here.</Typography>
            </Grid>

        </Grid>
    );
};

export default Login;
