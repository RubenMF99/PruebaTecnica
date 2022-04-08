import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const Sesion = ()=> {

    //State de usuario
    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const {email,password} = user;

    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(email.trim() === "" || password === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
              });
            return;
        }
    }

    const userExisted = async data =>{
        await axios.post('http://front-test.vinixcode.cloud:8000/api/auth/login',user);
    }
    return (
        <div className='container'>
           <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <h2 className="title" >Iniciar Sesion</h2>
                </div>
           </div>
           <div className="row justify-content-center align-items-center">
                <div className="col-auto bg-light p-5">
                    <form 
                            onSubmit={handleSubmit}
                    >
                         <div className="row justify-content-center ">
                            <div className="col-md-7 m-4">
                                <input
                                    name="email"
                                    className="form-control "
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>        
                                <div className="col-md-7  m-4">
                                    <input
                                        name="password"
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        maxLength="6" 
                                        onChange={handleChange}
                                        value={password}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <input
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block "
                                    value="Iniciar"
                                    />
                                    <Link to="/register" className=" mt-1 nav-link"> Obtener una cuenta</Link>
                                </div>
                                
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default Sesion
