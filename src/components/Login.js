import React, {useState} from 'react';
import {Alert, Button, Grid, Snackbar, Stack, Typography} from "@mui/material";
import {theme} from "../theme";
import {LockOpen} from "@mui/icons-material";
import {StyledTextField} from "../theme/StyledComponents";
import {useMutation} from "@apollo/client";
import {SIGN_IN} from "../graphql/Mutations/SignIn";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setError] = useState({
        emailError: false,
        passwordError: false,
        msg: ""
    });

    const [showSnackbar, setShowSnackbar] = useState(false);

    const [SignIn] = useMutation(SIGN_IN, {
        onCompleted: data => {
            localStorage.setItem("access token", data.signIn.access_token);
            data.signIn && setShowSnackbar(true);
        },
        onError: err => err.graphQLErrors[0].extensions.email
            ? setError({emailError: true, passwordError: false, msg: err.graphQLErrors[0].extensions.email})
            : setError({emailError: false, passwordError: true, msg: err.graphQLErrors[0].extensions.password})
    });

    const handleLogin = async () => {
        await setError({
            emailError: false,
            passwordError: false,
            msg: ""
        });

        await SignIn({
            variables: {
                payload: values
            }
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

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
        ><Snackbar open={showSnackbar} autoHideDuration={1000} onClose={handleClose}
                   anchorOrigin={{vertical: "top", horizontal: "center"}}>
            <Alert>Sign in Successfully</Alert>
        </Snackbar>
            <Grid item sx={{width: '50%'}}>
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
                        helperText={errors.emailError && errors.msg}
                        onBlur={event => setValues({
                            ...values,
                            email: event.target.value
                        })}
                        error={errors.emailError}
                    />
                    <StyledTextField
                        label="Enter Your Password"
                        color="secondary"
                        fullWidth
                        helperText={errors.passwordError && errors.msg}
                        onBlur={event => setValues({
                            ...values,
                            password: event.target.value
                        })}
                        error={errors.passwordError}
                    />
                </Stack>
                <Typography variant={"caption"} sx={{color: theme.palette.secondary.main}}>Forget Password?</Typography>
                <Typography variant={"body2"} sx={{color: theme.palette.secondary.main, textAlign: "center", mt: 6}}>Don't
                    have an account? Sign Up here.</Typography>
                <Stack alignItems={"center"}>
                    <Button variant={"contained"} color={"secondary"} onClick={handleLogin}>
                        Login
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Login;
