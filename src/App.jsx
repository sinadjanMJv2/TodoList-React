import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";


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

    <NewTodoForm onSubmit={addTodo}/>
    <TodoList Todos={Todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>
  );
}

export default App;
