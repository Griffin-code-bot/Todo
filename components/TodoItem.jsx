export default function TodoItem(props) {
  return (
    <>
      <li>
        <h2>{props.todo.text}</h2>

        {/*
     <h3>this if of com{props.todo.completed.toString()}</h3>
     <pre>{JSON.stringify(props, null, 2)}</pre>
*/}
        {props.todo.completed ? "✅" : " ❌"}

        <button onClick={() => props.toggleTodo(props.todo.id)}>
          {" "}
          Toggle{" "}
        </button>

        <button
          onClick={() => {
            const newText = prompt("Enter text");
            if (newText == null) return;
            props.editTodo(props.todo.id, newText);
          }}
        >
          {" "}
          Edit{" "}
        </button>

        <button onClick={() => props.deleteTodo(props.todo.id)}>
          {" "}
          Delete{" "}
        </button>
      </li>
    </>
  );
}

{
  /*
<p>  {props.todo.completed ? "✅" :" ❌"}</p>
*/
}
