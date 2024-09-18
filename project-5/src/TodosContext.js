import { createContext, useContext } from 'react'

 export const TodosContext = createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed: false
    }],
    addTodo : (todo) =>{},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
 }) 

 export const TodosProvider = TodosContext.Provider;

 export  const useTodos = () => {
    return useContext(TodosContext);
 }
