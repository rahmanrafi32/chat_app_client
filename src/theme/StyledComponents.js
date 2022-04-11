import {alpha, Grid, InputBase, styled, TextField} from "@mui/material";

export const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: theme.spacing(1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const StyledTextField = styled(TextField)(({theme}) => ({
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

export const StyledGrid = styled(Grid)(({theme}) => ({
    background: theme.palette.primary.main,
    height: '70vh',
    width: '40vw',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
        height: '70vh',
        width: '95vw'
    }
}))