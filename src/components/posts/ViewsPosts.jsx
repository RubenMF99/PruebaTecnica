import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'
import Post from './post'
import useAuth from '../../hooks/useAuth'
const ViewPosts = () => {
    //state de postcs
    const [posts,setPosts] = useState([]);    
    const {idControl} = useAuth();
    
  
    useEffect(()=>{
        const listpost =async ()=>{
             const token = localStorage.getItem('token');
                if(!token) return;
                const config = {
                    headers:{"Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                    }
                }
                try{
                    const url = `${process.env.REACT_APP_RUTA}/api/v1/post`;
                    const result = await axios.get(url,config);
                    setPosts(result.data);
                   // console.log(token);
                }catch(error){
                    console.log(error);
                }
    }
    listpost();
    },[idControl]);
    

    return (
        <div className="container">
           <div className="row justify-content-center mt-5">
               <div className="col-auto">
                 <h2>Tus Post</h2>
               </div>
           </div>
           <div className="row justify-content-center mt-5">
               <div className="col-8">
               <table className="table table-responsive">
                   <tbody>
                        {posts.map(post => (
                            <Post post={post} key={post.id}/>   
                        ) )}
                    </tbody>
                </table>
               </div>
                <div className="col-10 ">
                        <Link to="/Addpost" className="btn btn-block btn-primary mt-5 float-left">Agregar un Post </Link>
                </div>
            </div>
            
        </div>
    )
} 

export default ViewPosts
