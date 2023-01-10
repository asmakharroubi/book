import {v4 as uuidv4} from 'uuid'
import {ADD_BOOK, EDIT_BOOK, CHANGE_DONE} from "../Constants/Action-type"


const initialState = {bookList:[
    {
      id: uuidv4(),

      img: "https://i.pinimg.com/564x/f2/10/dc/f210dcc7e4893d1097f10b5a92c08cf6.jpg",
      title: "Annihilation ",
      isDone: true,
    },
    {
      id: uuidv4(),

      img: "https://i.pinimg.com/564x/b0/44/f6/b044f664bef4615592ecab717bfb0e49.jpg",
      title: " In Search of Lost Time",
      isDone: true,
    },
    {
      id: uuidv4(),

      img: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2022/01/Dont-Know-Tough.jpeg",
      title: "Don't Know Tough",
      isDone: false,
    },
    {
      id: uuidv4(),

      img: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2022/07/Shrines-of-Gaiety-195x300.jpeg",
      title: "Kate Atkinson, Shrines of Gaiety",
      isDone: false,
    },
    {
      id: uuidv4(),

      img: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2022/05/Daughter-of-Doctor-Moreau.jpeg",
      title: "Daughter of Doctor Moreau",
      isDone: false,
    },
    {
      id: uuidv4(),

      img: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2022/01/The-Devil-Takes-You-Home.jpeg",
      title: "The Devil Takes You Home",
      isDone: false,
    },
  ]} 
function BookReducer (state=initialState,action) {
    const {type,payload} = action ;


  
    
       switch (type) {
        case ADD_BOOK: 
         return {
          bookList:[...state.bookList , payload]}
          case EDIT_BOOK: 
          return {
            bookList: state.bookList.map((book)=> book.id === payload.id ? {...book, title:payload.edit }:book)
          }
          case CHANGE_DONE:
            return {
              bookList: state.bookList.map((book) =>
          book.id === payload ? { ...book, isDone: !book.isDone } : book
        ),
            }
       
        default:
            return state
       }

    
  
}
export default BookReducer
