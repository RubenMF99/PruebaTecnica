import React,{useEffect,useState} from 'react'
import axios from 'axios'

const ViewPosts = () => {

    useEffect(() => {
        const consultar = async()=> {
            const url = `${process.env.REACT_APP_RUTA}/api/v1/post`;
            const result = await axios.get(url);
            console.log(result);
        }
        consultar();
    }  
    );
    return (
        <div>
           <h2>Desde Publicaciones</h2>
        </div>
    )
} 

export default ViewPosts
