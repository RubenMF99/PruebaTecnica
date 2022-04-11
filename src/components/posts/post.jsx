import axios from 'axios'
import useAuth from '../../hooks/useAuth'
const Post = ({post})=>{
    const {setidControl} = useAuth();
    const deletePost = async id =>{
        const url = `${process.env.REACT_APP_RUTA}/api/v1/post/`;
        try{
            await axios.delete(url+id);
            setidControl(id);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <tr>
                 <td>{post.title}</td>
                 <td>{post.body}</td>
                 <td>{post.id}</td>
                 <td>
                     <button
                      className="btn btn-danger"
                        onClick={()=>{deletePost(post.id)}}
                     >Eliminar</button>
                 </td>
        </tr>
    );
}

export default Post