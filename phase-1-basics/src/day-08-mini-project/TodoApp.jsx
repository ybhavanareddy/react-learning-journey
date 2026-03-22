import React, { useState } from 'react'
import TodoItem from './TodoItem';
import './TodoApp.css'
function TodoApp() {

    const [todo, setTodo] = useState("")

    const [todos, setTodos] = useState([]);

    const [error, setError] = useState("");

    const [editingId, setEdittingId] = useState(null)
    const [editText, setEditText] = useState('')

    function onAddTodo(){
        if(!todo.trim()){
            setError("Please Enter your Task");
            return;
        }
        setTodos([...todos,{id:Date.now(), text:todo, completed:false}]);
       
        setTodo("");
        setError("");

    }

    function onRemoveTodo(idToRemove){
        console.log(idToRemove);
        const updatedTodoList = todos.filter(todo => todo.id !== idToRemove)
        setTodos(updatedTodoList)
    }
  
    function onMarkAsCompleted(id){
        const updatedTodos = todos.map(todo => 
            todo.id === id 
            ?{...todo, completed:!todo.completed}
            :todo
        )
        setTodos(updatedTodos);
        
    }

    function onStartEdit(id,text){
        setEdittingId(id);
        setEditText(text);

    }

    function onSaveEdit(id){
        const updated = todos.map((todo)=>
            todo.id === id? {...todo, text:editText}:todo
        );
        setTodos(updated);
        setEdittingId(null);
        setEditText("");
    }
    
    return (
    <div className='todos-Container'>

        <div className='input-field'>
            <input
                type="text"
                value={todo}
                placeholder='Enter Your Task'
                onChange={(e) => {
                    setTodo(e.target.value);
                    setError("");
                    
                }}
            />
            <button onClick={onAddTodo}>Add Task</button>
        </div>


        {error && <p style={{color:"red"}}>{error}</p>}

        <ul>
            {todos.map((todoItem)=>(
                
                <TodoItem 
                key={todoItem.id} 
                todoItem={todoItem} 
                onMarkAsCompleted={onMarkAsCompleted}  
                onRemoveTodo={onRemoveTodo} 
                onStartEdit={onStartEdit}
                onSaveEdit={onSaveEdit}
                editingId={editingId}
                setEditText={setEditText}
                />
            ))}
            
        </ul>

    </div>
  )
}

export default TodoApp