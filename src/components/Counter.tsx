import { useTodoContext } from "../lib/hooks";

const Counter = () => {
  const { totalNumberOfTodos, numberOfCompletedTodos } = useTodoContext();
  return (
    <div>
      <p>
        <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} Completed
      </p>
    </div>
  );
};

export default Counter;
