import React, {useContext, useState} from 'react';
import {Alert, Button, Grid, Snackbar, Stack, Typography} from "@mui/material";
import {theme} from "../theme";
import {LockOpen} from "@mui/icons-material";
import {StyledGrid, StyledTextField} from "../theme/StyledComponents";
import {useMutation} from "@apollo/client";
import {SIGN_IN} from "../graphql/Mutations/SignIn";
import {Link, useNavigate} from "react-router-dom";
import {userContext} from "../App";


const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [error, setErrors] = useState({
        status: false,
        msg: ""
    });

    const [showSnackbar, setShowSnackbar] = useState(false);

    const [SignIn] = useMutation(SIGN_IN, {
        onCompleted:async data => {
            localStorage.setItem("access token", data.signIn.access_token);
            localStorage.setItem("refresh token", data.signIn.refresh_token);
            await data.signIn && setShowSnackbar(true);
            await data.signIn && setLoggedUser(true);
        },
        onError: err => setErrors({
            status: true,
            msg: err.graphQLErrors[0].extensions
        })
    });

    const handleLogin = async () => {
        await setErrors({
            status: false,
            msg: {}
        });

        const sign = await SignIn({
            variables: {
                payload: values
            }
        });
        !sign.errors && navigate('/chat');
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    return (
        <StyledGrid
            container
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Snackbar open={showSnackbar} autoHideDuration={1000} onClose={handleClose}
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
                        helperText={error.status && error.msg.email}
                        onBlur={event => setValues({
                            ...values,
                            email: event.target.value
                        })}
                        error={error.status && Boolean(error.msg.email)}
                    />
                    <StyledTextField
                        label="Enter Your Password"
                        color="secondary"
                        fullWidth
                        type={"password"}
                        helperText={error.status && error.msg.password}
                        onBlur={event => setValues({
                            ...values,
                            password: event.target.value
                        })}
                        error={error.status && Boolean(error.msg.password)}
                    />
                </Stack>
                <Typography variant={"caption"} sx={{color: theme.palette.secondary.main}}>
                    Forget Password?
                </Typography>
                <Typography variant={"body2"} sx={{color: theme.palette.secondary.main, textAlign: "center", mt: 6}}>
                    Don't have an account? <Link style={{color: '#52d794'}} to={"/sign-up"}>Sign Up</Link> here.
                </Typography>
                <Stack alignItems={"center"} sx={{mt: 5}}>
                    <Button variant={"contained"} color={"secondary"} onClick={handleLogin}>
                        Login
                    </Button>
                </Stack>
            </Grid>
        </StyledGrid>
    );
};

export default Login;
