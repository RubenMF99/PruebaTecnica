import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'
const AuthContext = createContext();

const AuthProvider = ({children})=> {

    //state de autententicacion
    const [authUser,setAuthUser] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const autenticarUser = async ()=>{
            const token = localStorage.getItem('token');
            if(!token){
                return;
                setLoading(false);
            } 

            const config = {
                headers:{"Content-Type":"application/json",
                Authorization:`Bearer ${token}`
                }
            }
            try{
                const url = process.env.REACT_APP_RUTA;
                const response = await axios.get(`${url}/api/auth/user-profile`,config);
                setAuthUser(response.data);
            }catch(error){
                setAuthUser({});
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        autenticarUser();
    },[]);
    return (
        <AuthContext.Provider
            value={{
                authUser,
                loading,
                setAuthUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export{
    AuthProvider
}

export default AuthContext
