import { ADD_BOOK } from "../Constants/Action-type"
import {EDIT_BOOK,CHANGE_DONE} from "../Constants/Action-type"

export const addBook = (payload) => {
    return {
        type : ADD_BOOK ,
        payload: payload,
    }
}

export const editBook = (payload) => {
  return {
    type: EDIT_BOOK,
    payload: payload,
  };
};

export const changeDone = (payload) => {
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};

 