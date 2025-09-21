import DeleteButton from "./DeleteButton.jsx"

const TodoList = ({todos, handleToggleTodo, handleDeleteTodo}) => {
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
