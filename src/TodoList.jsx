import { TodoItem } from "./TodoItem";

export function TodoList({Todos}){
    return(
        
      <ul className="list">
      {Todos.length === 0 && "No Todos"}
      {Todos.map((todo) => {
        return (

        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>

         
        );
      })}
    </ul>
    )
}