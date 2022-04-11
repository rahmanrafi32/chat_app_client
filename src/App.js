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
import {createContext, useState} from "react";

export const userContext = createContext({});
function App() {
    const [loggedUser, setLoggedUser] = useState(false);
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: {xs: '90vh', md: '100vh'},
            }}
        >
            <userContext.Provider value={[loggedUser, setLoggedUser]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route path="/*" element={<PrivateRoute/>}>
                            <Route path="chat" element={<ChatBody/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </userContext.Provider>
        </Stack>
    );
}

export default App;
