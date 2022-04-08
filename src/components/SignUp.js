import React from 'react';
import {theme} from "../theme";
import {Button, Grid, Stack, styled, TextField, Typography} from "@mui/material";

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

const SignUp = () => {
    return (
        <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                background: theme.palette.primary.main,
                height: {xs: '90vh', md: '90vh'},
                width: {xs: '95vw', md: '40vw'},
                borderRadius: 2
            }}
        >
            <Grid items sx={{width: {xs: '90%', md: '60%'}}}>
                <Stack
                    alignItems={"center"}
                    spacing={2}>
                    <Typography variant={"h3"} sx={{color: theme.palette.secondary.main, mb: {xs: 2, md: 5}}}>Sign
                        Up</Typography>
                    <Stack direction={"row"} spacing={5}>
                        <StyledTextField
                            label="First Name"
                            color="secondary"
                            fullWidth
                            helperText={"Enter your first name"}
                            // error
                        />
                        <StyledTextField
                            label="Last Name"
                            color="secondary"
                            fullWidth
                            helperText={"Enter your last name"}
                            // error
                        />
                    </Stack>
                    <StyledTextField
                        label="Mobile Number"
                        color="secondary"
                        fullWidth
                        helperText={"Please enter your last name"}
                        // error
                    />
                    <StyledTextField
                        label="Email"
                        color="secondary"
                        fullWidth
                        helperText={"Please enter your last name"}
                        // error
                    />
                    <StyledTextField
                        label="Password"
                        color="secondary"
                        fullWidth
                        helperText={"Please enter your last name"}
                        // error
                    />
                    <StyledTextField
                        label="Re-type password"
                        color="secondary"
                        fullWidth
                        helperText={"Please enter your last name"}
                        // error
                    />
                    <Button color={"secondary"} variant={"contained"} size={"large"}>Submit</Button>
                </Stack>
            </Grid>

        </Grid>
    );
};

export default SignUp;