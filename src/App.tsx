import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todoText) => {
      if (todos.length  >= 3 ) {
        alert("Log in to add more thank 3 todos")
      } else {
        setTodos(prev => [...prev, {id: prev.length+1, text: todoText, isCompleted: false}])
      }
    }

    const handleToggleTodo = (id) => {
      setTodos(prev => {
        return prev.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
      })
    }

    const handleDeleteTodo = (id) => {setTodos(prev =>  prev.filter(todo => todo.id !== id))}

  return (
    <div className="bg-amber-100 min-h-screen flex justify-center items-center">
      <main className="bg-white w-[992px] h-[90vh] rounded-lg shadow-lg grid grid-cols-[8fr_4fr] grid-rows-[60px_1fr]">
        <Header todos={todos}/>

        <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>

        <Aside handleAddTodo={handleAddTodo}/>
      </main>
    </div>
  );
}

export default App;
