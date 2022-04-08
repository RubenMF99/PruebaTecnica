import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const Register = ()=> {
    const [registrarU,setregistrar] = useState({
        nombre:"",
        email:"",
        password:""
    });

    const {nombre,email,password} = registrarU

    const handleChange = e =>{
        setregistrar({
            ...registrarU,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmitForm = e =>{
        e.preventDefault();
        if(nombre.trim() === "" || email.trim() === "" || password.trim() === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
              });
            return;
        }
    }

    return (
        <div>
             <div className='container'>
           <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <h2 className="title" >Registrarse</h2>
                </div>
           </div>
           <div className="row  justify-content-center align-items-center">
                <div className="col-auto bg-light p-5">
                    <form
                        onSubmit={handleSubmitForm}
                    >
                         <div className="row justify-content-center ">
                            <div className="col-md-7 m-4">
                                <input
                                    name="nombre"
                                    className="form-control "
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={handleChange}
                                />
                            </div>       
                            <div className="col-md-7  m-4">
                                    <input
                                        name="email"
                                        className="form-control"
                                        type="email"
                                        placeholder="Email" 
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
                                    />
                                </div>
                                <div className="col-md-7  m-4">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Repetir password"
                                        maxLength="6" 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <input
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block "
                                    value="Iniciar"
                                    />
                                    <Link to="/" className=" m-lg-4 btn btn-success btn-lg btn-block ">Volver</Link>
                                </div>
                                
                        </div>
                    </form>
                </div>
           </div>
        </div>
        </div>
    )
}

export default Register
