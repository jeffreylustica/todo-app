
import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { TodosContext } from "../contexts/TodosContextProvider";

const TodoList = () => {
  const context = useContext(TodosContext)
  if (!context) {
    throw new Error("Forgot to add provider / context possibly null")
  }

  const {todos, handleToggleTodo, handleDeleteTodo} = useContext(TodosContext)
  
  return (
    <ul className="p-2">
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">Start adding a todo</li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.text}
          className="cursor-pointer p-2 flex justify-between hover:bg-neutral-100"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={`${
              todo.isCompleted === true && "line-through text-neutral-300"
            }`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo}/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
