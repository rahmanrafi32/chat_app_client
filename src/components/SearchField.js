import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import {Search, SearchIconWrapper, StyledInputBase} from "../theme/StyledComponents";

const SearchField = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{display: {xs: 'none', md: 'block'}}}/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    );
};

export default SearchField;
