import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const auth = false;
    return auth ? <Outlet/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;