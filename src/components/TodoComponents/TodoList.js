// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import "./Todo.css";
import Todo from "./Todo";


const TodoList = (props) =>{
    console.log(props)
    console.log(props.todoList)
    // second console log inspects the array 

     return(
         <div>
             {props.todoList.map(todo => (
                 <Todo key = {todo.id} task={todo.task}/>
                //  todo.task= the todo is a banana key word
                //  <can invoke an imported component on any component
             ))}
         </div>
     )

}    

// class componts always have to have returns- returns are required in both

// functional component- Regular functions

// think of them as input out put machines 

export default TodoList;
