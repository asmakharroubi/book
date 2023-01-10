import React ,{useState , useEffect} from 'react'
import Book from "../Book/Book"
import "./BooksList.css"
import {Button} from "react-bootstrap"
import {useSelector , useDispatch} from 'react-redux'
import {changeDone} from '../../Redux/Actions/Action'
import bookList from '../../Redux/Reducers/BookReducer'


const BooksList = () => {
  const books = useSelector((state)=>state.BookReducer.bookList)
  const [list,setList] = useState(books)
   const [done, setDone] = useState(false);

  const [notDone, setNotDone] = useState(false);

  const handleList = () => {
    if (done === true) {
      setList(list.filter((book) => book.isDone === true));
    } else if (notDone === true) {
      setList(list.filter((book) => book.isDone === false));
    }
  };

  useEffect(()=>{
    setList(books)
    handleList()
  },[done,notDone,bookList])

  const handleDone = ()=> {
    setDone(true)
    setNotDone(false)
  }
  const handleNotDone = () => {
    setDone(false);
    setNotDone(true);
  };
  const dispatch = useDispatch();
  const handleReset =() =>{
    setDone(false)
    setNotDone(false)
    dispatch(changeDone())

  }

  return (
    <div className="bookslist">
      <div className="filterbtn">
        <Button variant="success" onClick={handleDone}>
          {" "}
          filter by done{" "}
        </Button>
        <Button variant="danger" onClick={handleNotDone}>
          {" "}
          filter by not done{" "}
        </Button>
        <Button variant="info" onClick={handleReset}> Reset</Button>
      </div>
      <div className="bookss">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
}

export default BooksList