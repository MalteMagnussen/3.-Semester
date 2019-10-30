import React from "react";
import PropTypes from "prop-types";

const TodoList = props => {
  const { todos, deleteTodo, editTodo } = props;
  /* 
  d) In the TodoList component, 
  change the part that creates each line as sketched below, 
  to get the links sketched in the initial figure 
  (feel free to use buttons or whatever you prefer).
  */
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todoText} {"("}
            <a
              href="#/"
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              delete{""}
            </a>
            {", "}
            <a href="#/" onClick={() => editTodo(todo.id)}>
              edit
            </a>
            {")"}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
};
