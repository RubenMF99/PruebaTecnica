import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//Importando Componentes
import Sesion from './components/login/Sesion';
import Register from './components/login/Register';
import ViewPosts from './components/posts/ViewsPosts';
import AddPosts from './components/posts/AddPosts';


function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sesion/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/Addpost" element={<AddPosts/>}></Route>
            <Route path="/Viewsposts" element={<ViewPosts/>}></Route>
        </Routes>
   </BrowserRouter>
  );
}

export default App;
