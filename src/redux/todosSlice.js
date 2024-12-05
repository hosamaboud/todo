import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosReducer = createSlice({
  name: 'todosReducer',
  initialState,
  reducers: {
    // Adding Todo
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    // Remove Todo
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // Update Todo
    updateTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            item: action.payload.item,
          };
        }
        return item;
      });
    },
    // updateTodo: (state, action) => {
    //   return state.map((todo) =>
    //     todo.id === action.payload.id
    //       ? {
    //           ...todo,
    //           item: action.payload.item,
    //           completed: false, // Reset completed status when editing
    //         }
    //       : todo,
    //   );
    // },
    // Complete Todo
    completeTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      });
    },
    // Undo Todo (Reverting completed state)
    undoTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: false, // Undo the completion
          };
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo, undoTodo } =
  todosReducer.actions;

export default todosReducer.reducer;
