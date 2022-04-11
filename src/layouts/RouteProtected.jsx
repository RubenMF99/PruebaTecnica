import {Outlet,Navigate} from 'react-router-dom'
import  useAuth from '../hooks/useAuth';

const  RouteProtected = ()=> {
    const {authUser,loading} = useAuth();
    if(loading) return("Loading");
    return (
        <>
            {authUser.id ?<Outlet/>:<Navigate to="/"/>}
        </>
    )
}

export default RouteProtected
