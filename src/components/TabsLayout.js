import React from 'react';
import {Divider, Tab, Tabs} from "@mui/material";
import {theme} from "../theme";

const TabsLayout = () => {
    return (
        <Tabs   >
            <Tab label="Messages" disableRipple={true} sx={{color:theme.palette.primary.dark}}/>
            <Tab label="Friends" disableRipple={true} sx={{color:theme.palette.primary.dark}}/>
            <Tab label="Login" disableRipple={true} sx={{color:theme.palette.primary.dark}}/>
        </Tabs>
    );
};

export default TabsLayout;
