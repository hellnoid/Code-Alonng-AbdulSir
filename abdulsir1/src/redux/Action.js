import { ADD_TODO } from "./ActionTypes";

export const addTodo = (data) => ({
  title: ADD_TODO,
  payload: data,
});
