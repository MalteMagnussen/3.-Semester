import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), todoText: "Wake up" },
    { id: uuid(), todoText: "Make Coffee" },
    { id: uuid(), todoText: "Drink Coffee" }
  ];
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
  console.log(todos);

  const addTodo = todo => {
    if (todo.id === "") {
      // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {
      //if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({ id: "", todoText: "" });
  };
  /* 
  b) As outlined in the video given above, 
  all state manipulating methods must be placed in App.js, 
  so add these two methods just below the addTodo(..) method:
  */
  const deleteTodo = id => {
    /**
     * f) Complete the deleteTodo(..) method to remove the selected todo from the list.
     * Remember it’s not enough to just remove the item from the list.
     * You must create a clone of the list, remove the todo from this,
     * and add it to state again, to make React detect the change and then update all dependent Components.
     * Hint: There are several ways to remove an item from a list.
     * One of them would be to use the filter method to create a new object including all items from the
     * original except the one that matches the id for the todo we want to delete
     */
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };
  const editTodo = index => {
    /**
     * g) Complete the editTodo(id) method, so todo’s can be edited (via the same UI as used for new todo’s)
     * Hint-1: This requires only two lines of code, since support is already added for edit in the provided code.
     * All you need to do is, use the provided id to lookup the todo we want to edit,
     * and then update the nextTodo object in the state object with this todo.
     * It should then “flow” down into the NewTodo control, and when you press save here,
     * the save method should detect that this isn’t a new object (id >=0) and handle it accordingly.
     */
    const todoEdit = todos.find(element => {
      return element.id === index;
    });
    setNewTodo(todoEdit);
  };
  /**
   * c) Eventually, they will be called from the TodoList presenter-Component,
   * so pass them down via props together with todos which already are passed down.
   */

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
        <div className="col-5 new-todo">
          <NewTodo addTodo={addTodo} nextTodo={newTodo} />
        </div>
      </div>
    </div>
  );
}
export default App;
