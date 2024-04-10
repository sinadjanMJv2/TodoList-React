import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";


function App() {
 
  const [Todos, setTodos] = useState([]);

  function addTodo(title) {
      setTodos((currenttodos) => {
        return [
          ...currenttodos,
          {
            id: crypto.randomUUID(),
            title,
            completed: false,
          },
        ];
      });
  }

  
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
     <h1>Todo List</h1>

    <NewTodoForm onSubmit={addTodo}/>

      <ul className="list">
        {Todos.length === 0 && "No Todos"}
        {Todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
