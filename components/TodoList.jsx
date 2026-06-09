
import TodoItem from './TodoItem.jsx'

export default function TodoList(props) {

 return (
          <>
{/*
<p>{String(Array.isArray(props.todos))}</p>
 <p>{JSON.stringify(props)}</p>
*/}   
      {/*  <TodoItem todo={{text:"test todo"}} />*/}


         { props.todos.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={props.editTodo}
          toggleTodo={props.toggleTodo}    
          deleteTodo={props.deleteTodo}     
     />
          
          
          
          ))}



          </>
   
      )
        }

