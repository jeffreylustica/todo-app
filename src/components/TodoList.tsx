import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "buy groceries", isCompleted: false },
    { id: 2, text: "jog", isCompleted: true },
    { id: 3, text: "study", isCompleted: false },
  ]);

  const handleClick = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <ul className="p-2">
      {todo.map((todo) => (
        <li
          key={todo.text}
          className="cursor-pointer p-2 flex justify-between hover:bg-neutral-100"
          onClick={() => handleClick(todo.id)}
        >
          <span
            className={`${
              todo.isCompleted === true && "line-through text-neutral-300"
            }`}
          >
            {todo.text}
          </span>
          <button>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
