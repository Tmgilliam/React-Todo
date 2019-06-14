import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  state = {
    todoList: [
      {
        task: 'Morning/Cold Shower',
        id: 1528817077286,    
        // why can't I shange the ID name
        completed: false
      },
      {
        task: 'Meditation',
        id: 1528817084358,
        completed: false
      },

      {
        task: 'Walk the dogs',
        id: 1537819284900,
        completed: false,

        // stay insdie array only when creating new task
        // does all the completed have to say false ? Because they all start as false, just changind the value of completed]
      }
      // yarn start only needs one install per project, after that just
    ],
    id:'',
    // placeholder^^ ( Have one for everthing in the ToDo object, and fill empty strings with user actions)(i.e. user input field)
    task:'',
    // a placeholder for each key for the objects in the array
    completed:'',


  }

  //  methods are like functions inside of class components...Figure our a name for what you would like to call the method and put it first


     changeHandler = (event) => {
      //  banana key word is placed in () and passed through the changeHandler
      this.setState({
        [event.target.name]: event.target.value
        // connects changeHandler method to state object key that matches the input name
      })
      // curly brackets are objects, flat brackets are arrays, and parenthesis are way to pass parameters to a function or how you denote JSX
     }
  
  
     addTask = (event) => {
      //  addtask is the name of the method
      //  is another state
      event.preventDefault()
      // prevents default browswer behavior on the submit
      this.setState({
        // this.setSTate is going to set the state of the todoList array to the current value of the todoList array.
        todoList:[
          ...this.state.todoList,
        {
          id:Date.now(),
        task: this.state.task,
        completed: false
        }

        ]
       
        // ... is the spread operator, and it takes everything inside an array and just displays the content
      })
      // this.setState is used to modify your state, can be put in any method. 
       this.setState({task: ''})
      //  inside of the setState () always put an object and curly's
      //  takes whatevers in state 
     }

  




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todoList)
    console.log(this.state)


    return (
      <div className="App">
        <div className='container'>
          <h2>The Master Plan-Billionaire Mind Set</h2>
          {/* how do I change this font */}

          <TodoList todoList = {this.state.todoList}/>
          {/* In Todo list.js you can do a console log of the props */}
          <TodoForm
          task={this.state.task}
          // parameters should match this key word
          completed= {this.state.completed}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          // passing down properties inside the invocation^^^
          />
        </div>
      </div>
    );
  }
}

export default App;
