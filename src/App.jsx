import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";


function App() {
 
  const [Todos, setTodos] = useState(() => {

    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(Todos))
  }, [Todos])


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
