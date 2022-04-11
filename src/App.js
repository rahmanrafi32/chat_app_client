import {Stack} from "@mui/material";
import ChatBody from "./components/ChatBody";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: {xs: '90vh', md: '100vh'},
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/*" element={<PrivateRoute/>}>
                        <Route path="chat" element={<ChatBody/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </Stack>
    );
}

export default App;
