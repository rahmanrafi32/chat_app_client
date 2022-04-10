import {Stack} from "@mui/material";
import ChatBody from "./components/ChatBody";
import TabsLayout from "./components/TabsLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: {xs: '90vh', md: '100vh'},
            }}
        >
            {/*<TabsLayout/>*/}
            {/*<ChatBody/>*/}
            <Login/>
            {/*<SignUp/>*/}
        </Stack>
    );
}

export default App;
