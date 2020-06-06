import React, { Component } from "react";
import TodoItem from "../components/Todo/TodoItem";

class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }

  render() {
    return () => {
      const todos = [
        { id: 0, title: "Task 0", isDone: false },
        { id: 1, title: "Task 1", isDone: false },
        { id: 2, title: "Task 2", isDone: true },
      ];

    }
}
// class Performance extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todos,
//     };
//     this.checkTodo = this.checkTodo.bind(this);
//     this.deleteTodo = this.deleteTodo.bind(this);
//   }

//   deleteTodo(todo) {
//     if (!confirm("Are you sure?")) {
//       return;
//     }

//     const todos = this.state.todos.slice();
//     const pos = this.state.todos.indexOf(todo);

//     todos.splice(pos, 1);
//     this.setState({
//       todos: todos,
//     });
//   }

//   checkTodo(todo) {
//     const todos = this.state.todos.map((todo) => {
//       return { id: todo.id, title: todo.title, isDone: todo.isDone };
//     });

//     const pos = this.state.todos
//       .map((todo) => {
//         return todo.id;
//       })
//       .indexOf(todo.id);

//     todos[pos].isDone = !todos[pos].isDone;
//     this.setState({
//       todos: todos,
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>My Todos</h1>
//         <TodoList
//           todos={this.state.todos}
//           checkTodo={this.checkTodo}
//           deleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }

export default Performance;
