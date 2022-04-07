import {Stack} from "@mui/material";
import ChatBody from "./components/ChatBody";
import TabsLayout from "./components/TabsLayout";

function App() {
    return (
        <Stack
            alignItems="center"
            sx={{height: {xs: '70vh', md: '100vh'}, justifyContent: {xs: "start", md: "center"}}}>
            <TabsLayout/>
            <ChatBody/>
        </Stack>
    );
}

export default App;
