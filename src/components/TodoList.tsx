const initialTodos = [
  { text: "buy groceries", isCompleted: false },
  { text: "jog", isCompleted: true },
  { text: "study", isCompleted: false },
];

const TodoList = () => {
  return (
    <ul className="p-2">
      {initialTodos.map((todo) => (
        <li
          key={todo.text}
          className="cursor-pointer p-2 flex justify-between hover:bg-neutral-100"
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
