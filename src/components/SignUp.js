import React, {useState} from 'react';
import {theme} from "../theme";
import {Alert, Button, Grid, InputAdornment, Snackbar, Stack, Typography} from "@mui/material";
import {StyledGrid, StyledTextField} from "../theme/StyledComponents";
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../graphql/Mutations/SignUp";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
        const navigate = useNavigate();
        const [showSnackbar, setShowSnackbar] = useState(false);
        const [values, setValues] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: ''
        });

        const [errors, setErrors] = useState({
            status:false
        });

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            setShowSnackbar(false);
        };

        const [SignUp] = useMutation(SIGN_UP, {
            onCompleted: data => {
                data && setShowSnackbar(true);
            },
            onError: error => {
                setErrors({
                    status: true,
                    msg: error.graphQLErrors[0].extensions
                })
            }
        });

        const handleSignUp = async () => {
            await setErrors({});
            const signUp = await SignUp({
                variables: {
                    payload: values
                }
            });

            !signUp.errors && navigate('/login');
        };

        return (
            <StyledGrid
                container
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Snackbar open={showSnackbar} autoHideDuration={1000} onClose={handleClose}
                          anchorOrigin={{vertical: "top", horizontal: "center"}}>
                    <Alert>Signed up Successfully</Alert>
                </Snackbar>
                <Grid item sx={{width: {xs: '90%', md: '60%'}}}>
                    <Stack
                        alignItems={"center"}
                        spacing={4}>
                        <Typography variant={"h3"} sx={{color: theme.palette.secondary.main, mb: {xs: 2, md: 5}}}>Sign
                            Up</Typography>
                        <Stack direction={"row"} spacing={5}>
                            <StyledTextField
                                label="First Name"
                                color="secondary"
                                fullWidth
                                onBlur={event => setValues({
                                    ...values,
                                    firstName: event.target.value
                                })}
                                helperText={errors.status && errors.msg.firstName}
                                error={errors.status && Boolean(errors.msg.firstName)}
                            />
                            <StyledTextField
                                label="Last Name"
                                color="secondary"
                                fullWidth
                                onBlur={event => setValues({
                                    ...values,
                                    lastName: event.target.value
                                })}
                                helperText={errors.status && errors.msg.lastName}
                                error={errors.status && Boolean(errors.msg.lastName)}
                            />
                        </Stack>
                        <StyledTextField
                            label="Mobile Number"
                            color="secondary"
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+88</InputAdornment>,
                            }}
                            onBlur={event => setValues({
                                ...values,
                                phoneNumber: event.target.value
                            })}
                            helperText={errors.status && errors.msg.phoneNumber}
                            error={errors.status && Boolean(errors.msg.phoneNumber)}
                        />
                        <StyledTextField
                            label="Email"
                            color="secondary"
                            fullWidth
                            onBlur={event => setValues({
                                ...values,
                                email: event.target.value
                            })}
                            helperText={errors.status && errors.msg.email}
                            error={errors.status && Boolean(errors.msg.email)}
                        />
                        <StyledTextField
                            label="Password"
                            color="secondary"
                            fullWidth
                            type={"password"}
                            onBlur={event => setValues({
                                ...values,
                                password: event.target.value
                            })}
                            helperText={errors.status && errors.msg.password}
                            error={errors.status && Boolean(errors.msg.password)}
                        />
                            <Button
                                color={"secondary"}
                                variant={"contained"}
                                size={"large"}
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </Button>
                        <Typography variant={"body2"} sx={{color: theme.palette.secondary.main}}>Already have an account? <Link style={{color: '#52d794'}} to={"/"}>Login</Link></Typography>
                    </Stack>
                </Grid>
            </StyledGrid>
        );
    }
;

export default SignUp;