import React from 'react';
import "./Todo.css"



const TodoForm =(props) => { 
     console.log(props)
    return(
        <form onSubmit={props.addTask}>
            <input
            placeholder="...todo"
            type='text'
            name='task'
            // input name needs to = the place holder key in the state object(where I created place holders in App.js)
            onChange={props.changeHandler}
            // Is changeHandler an event listener- Yes, it's called a synthetic event-Onchange is the event listener-changeHandler is the method 
            // when and where is camel casing required in React- Anytime you see a string camel casing is not required. Every word must be camel same
            value={props.task}
            />
           {/* is building components inside the invocation doable everywhere? Is a type of nesting? */}

        </form>
    )
};

export default TodoForm;

// How can I check if it's adding now things and if there a list coming in ? 
// do we only console.log components? We should console log the passage of props from component to component
