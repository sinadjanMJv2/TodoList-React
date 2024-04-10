export function TodoItem({completed, id, title}){
    return(
        <li >
            <label>
              <input
                type="checkbox"
                checked={completed}
                // onChange={(e) => toggleTodo( e.target.checked)}
              />
              {title}
            </label>
            <button
              className="btn btn-danger"
            //   onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </li>
     
    )
}