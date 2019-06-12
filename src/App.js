import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {

  state = {
    todoList: [
      {
        task: 'Call Oprah',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Fofty owes me money',
        id: 1528817084358,
        completed: false
      }
    ],

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h2>My Todo List</h2>

          <TodoList todoList = {this.state.todoList}/>
        </div>
      </div>
    );
  }
}

export default App;
