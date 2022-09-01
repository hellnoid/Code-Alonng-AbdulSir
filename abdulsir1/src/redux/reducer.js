import { ADD_TODO } from "./ActionTypes";

const initState = {
  count: 0,
  todos: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
