import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState( [{
         id:1,
         text:"HTML",
         completed:false,
	},
        {
	 id:2,
         text:"CSS",
         completed:false        
         } 
       ]
      )


function addTodo() {
   if(task.trim() === "") return;
      const newTodo = {
          id: Date.now(),
	  text: task,
	  completed: false

	}	
      setTodos([...todos, newTodo])
        setTask("")

} 

function deleteTodo(indexToDelete){
const newTodos=todos.filter(
(_, index) => index!==indexToDelete
 )
setTodos(newTodos)
 }


function toggleTodo(id) {
  const updatedTodo =todos.map(item => {
if ( id == item.id){
    return {
    ...item,completed:!item.completed
          }
      }
 return item;
     })

   setTodos(updatedTodo)
    }


function editTodo(id, newText){
      
 const editedTodo =todos.map(item => {
        if (id == item.id) return {
       ...item, text: newText
      
 }
     return item ;
     })
      setTodos(editedTodo)
     
}





    

{/*
function toggleTodo(id) {
   setTodos( todos.map(todo=>{
return todo.id === id ? 
{ ...todo, completed: !todo.completed }:todo

})
)}

*/}



   
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
   
<div>
      <h1>Todo App</h1>
	<ul>
	

	<li>Add todo ✅</li>
	<li>Show todos ✅</li>
	<li>Delete todo ✅</li>

	<li>Mark complete ✅</li>
        <li>Edit text ✏️</li>
        <li>Unique IDs 🆔</li>
        <li>Due dates 📅</li>
        <li>Priority 🔥</li>
      {/* <li>Date.now()</li> */}


	</ul>
      
      <input type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)}
/>
      <button onClick={addTodo}>Add</button>

     <ul>
       {todos.map(( todo,index) =>
	<li key={todo.id}>{todo.text}
	{todo.completed ? " ✅" : " ❌"}
	<button onClick={()=>deleteTodo(index)}>Delete</button>
        <button onClick={()=> toggleTodo(todo.id)}>Toggle</button>
	<button onClick={()=>{
        const newText = prompt("Enter text")
         if (newText === null) return;
          editTodo(todo.id,newText)  }}
        > Edit </button>
        </li> )} 
          </ul>



    </div>

 </>
  )
}

export default App
