import {useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from '../../hooks/useAuth'
const Post = ({post})=>{

    const [show, setShow] = useState(false);
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
    //Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                 <td>
                 <Button variant="primary" onClick={handleShow}>
                    Ver post
                </Button>
                 </td>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {post.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        </tr>
    );
}

export default Post