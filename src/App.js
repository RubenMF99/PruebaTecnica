import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//Importando Componentes
import Sesion from './components/login/Sesion';
import Register from './components/login/Register';
import ViewPosts from './components/posts/ViewsPosts';
import AddPosts from './components/posts/AddPosts';
//Context de autenticacion
import {AuthProvider} from './context/Auth';
//Ruta protegida
import RouteProtected from './layouts/RouteProtected';

function App() {
  return (
   <BrowserRouter>
     <AuthProvider>
        <Routes>
            <Route path="/" element={<Sesion/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
           <Route path="/Addpost" element={<RouteProtected/>}>
              < Route index element={<AddPosts/>}/>
           </Route>
           <Route path="/Viewsposts" element={<RouteProtected/>}>
              < Route index element={<ViewPosts/>}/>
           </Route>
        </Routes>
      </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
