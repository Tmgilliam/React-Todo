// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import "./Todo.css";



const TodoList = (props) =>{
    console.log(props)
    console.log(props.todoList)

     return(
         <div>
             {props.todoList.map(todo => (
                 <div key ={todo.id}>{todo.task}</div>
             ))}
         </div>
     )

}

export default TodoList;
