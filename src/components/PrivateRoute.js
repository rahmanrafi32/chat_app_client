import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {userContext} from "../App";

const PrivateRoute = () => {
    const [loggedUser] = useContext(userContext);
    return loggedUser ? <Outlet/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;