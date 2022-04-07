import {Stack} from "@mui/material";
import ChatBody from "./components/ChatBody";
import TabsLayout from "./components/TabsLayout";
import Login from "./components/Login";

function App() {
    return (
        <Stack
            alignItems="center"
            sx={{
                height: {xs: '70vh', md: '100vh'},
                justifyContent: {xs: "start", md: "center"},
            }}
        >
            {/*<TabsLayout/>*/}
            {/*<ChatBody/>*/}
            <Login/>
        </Stack>
    );
}

export default App;
