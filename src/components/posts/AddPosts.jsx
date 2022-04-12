import {Link} from 'react-router-dom';
import {useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
const AddPosts = () => {
    //state toAdd post
    const [Addpost,setAddpost] = useState({
        title:"",
        body:""
    });

        const {title,body} = Addpost;
    const handleChange = e =>{
        setAddpost({
            ...Addpost,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmitForm = e =>{
        e.preventDefault();
        
        if(title.trim() === "" || body.trim() === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
              });
            return;
        }
        toAddpost(Addpost);
        setAddpost({
            title:"",
            body:""
        });
    }
    const toAddpost = async data =>{
        const token = localStorage.getItem('token');
                if(!token) return;
                const config = {
                    headers:{"Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                    }
                }
                try{
                    const url = `${process.env.REACT_APP_RUTA}/api/v1/post`;
                    await axios.post(url,data,config);
                    Swal.fire({
                        icon: 'success',
                        text: 'Post añadido con exito',
                      });
                }catch(error){
                    console.log(error);
                }
    }
    return (
        <div className="container">
           <div className="row justify-content-center mt-5">
               <div className="col-auto">
                 <h2>Agrega un Post</h2>
               </div>
           </div>  
        <form
            onSubmit={handleSubmitForm}
        >
        <div className="row justify-content-center ">
                        <div className="col-md-7 m-4 ">
                            <input
                                    name="title"
                                    className="form-control "
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={handleChange}
                                />
                            </div>       
                            <div className="col-md-7  m-4">
                                <textarea
                                 name="body"  
                                 cols="20" 
                                 rows="5"
                                 className="form-control"
                                 placeholder="Escribe tu post"
                                 value={body}
                                 onChange={handleChange}
                                 >
                                </textarea>
                                </div> 
                                <div className="col-md-7 clearfix">
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block "
                                        value="Agregar"
                                        />
                                     <Link to="/Viewsposts" className=" m-lg-5 btn btn-success btn-lg btn-block ">Volver</Link>
                                </div>
                            </div>
                    </form>
        </div>
    )
} 

export default AddPosts