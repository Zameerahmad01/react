import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos : [{
        id : 1,
        text : "hello world"
    }]
}


export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id:nanoid(),
                text : action.payload
            }
            state.Todos.push(todo)
        },


        removeTodo : (state, action) => {
            state.Todos = state.Todos.filter(todo => todo.id !== action.payload)
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer