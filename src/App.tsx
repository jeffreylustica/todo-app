import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number,
  text: string,
  isCompleted: boolean
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const totalNumberOfTodos = todos.length;
    const numberOfCompletedTodos = todos.filter(todo => todo.isCompleted === true).length;

    const handleAddTodo = (todoText:string) => {
      if (todos.length  >= 3 ) {
        alert("Log in to add more thank 3 todos")
      } else {
        setTodos(prev => [...prev, {id: prev.length+1, text: todoText, isCompleted: false}])
      }
    }

    const handleToggleTodo = (id:number) => {
      setTodos(prev => {
        return prev.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
      })
    }

    const handleDeleteTodo = (id:number) => {setTodos(prev =>  prev.filter(todo => todo.id !== id))}

  return (
    <div className="bg-amber-100 min-h-screen flex justify-center items-center">
      <main className="bg-white w-[992px] h-[90vh] rounded-lg shadow-lg grid grid-cols-[8fr_4fr] grid-rows-[60px_1fr]">
        <Header totalNumberOfTodos={totalNumberOfTodos} numberOfCompletedTodos={numberOfCompletedTodos}/>

        <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>

        <Aside handleAddTodo={handleAddTodo}/>
      </main>
    </div>
  );
}

export default App;
