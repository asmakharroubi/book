import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './AddBook.css'
import {useDispatch} from 'react-redux' 
import { addBook } from "../../Redux/Actions/Action";
import {v4 as uuidv4} from "uuid"


const AddBook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newBook,setNewBook] = useState({
    id:uuidv4(),
    img:"",
    title:"",
    isDone:false,

  })
  const handleAdd = (e)=> {
    setNewBook({...newBook,[e.target.name]:e.taget.value})
  }
  const dispatch =  useDispatch();
  const handleSubmit =() => {
    // console.log(newBook)
    dispatch(addBook(newBook))
    setShow(false);
  }

  return (
    <div>
      {" "}
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "8px" }}>
        Add book
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="addcontainer"
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmodal">
            <label htmlFor="">Book Cover URL </label>
            <input type="text" name='img' onChange={handleAdd} value={newBook} />
            <label htmlFor="">Book Name </label>
            <input type="text" name='title' onChange={handleAdd}  />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBook;
