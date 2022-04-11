import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const Register = ()=> {
    //state de registro
    const [registrarU,setregistrar] = useState({
        nombre:"",
        email:"",
        password:"",
        repeatPassword:""
    });
    const {nombre,email,password,repeatPassword} = registrarU;

    const handleChange = e =>{
        setregistrar({
            ...registrarU,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmitForm = e =>{
        e.preventDefault();
        if(nombre.trim() === "" || email.trim() === "" || password.trim() === "" || 
        repeatPassword.trim()===""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
              });
            return;
        }
        if(password !== repeatPassword){
            Swal.fire({
                icon: 'alert',
                title: 'Oops...',
                text: 'Las contraseñas deben ser iguales',
              });
            return;
        }
        const data = new FormData();
        data.append("name",nombre);
        data.append("email",email);
        data.append("password",password);
        data.append("password_confirmation",repeatPassword);
        //registrando usuario
       register_user(data);
        //reseteamos el forma
        setregistrar({
            nombre:"",
            email:"",
            password:"",
            repeatPassword:""
        });
    }

    const register_user = async (data) => {
        try{
        const url =`${process.env.REACT_APP_RUTA}/api/auth/register`;
        const response = await axios.post(url,data,{header:{'Content-Type':'multipart/form-data'}});
        console.log("Registro: ",response);
        }catch(error){
            console.log(error);
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
                                    value={nombre}
                                    onChange={handleChange}
                                />
                            </div>       
                            <div className="col-md-7  m-4">
                                    <input
                                        name="email"
                                        className="form-control"
                                        type="email"
                                        placeholder="Email" 
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
                                        value={password}
                                        maxLength="10" 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-7  m-4">
                                    <input
                                        name="repeatPassword"
                                        className="form-control"
                                        type="password"
                                        placeholder="Repetir password"
                                        maxLength="10" 
                                        value={repeatPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <input
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block "
                                    value="Registrarse"
                                    />
                                    <Link to="/" className=" m-lg-5 btn btn-success btn-lg btn-block ">Volver</Link>
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
