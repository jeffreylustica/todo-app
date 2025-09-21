const Counter = ({todos}) => {
  const todosLength = todos.length;
  const completedTodoLength = todos.filter(todo => todo.isCompleted === true).length;
  return (
    <div>
      <p>
        <b>{completedTodoLength}</b> / {todosLength} Completed
      </p>
    </div>
  );
};

export default Counter;
