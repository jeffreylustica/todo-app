import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

const Counter = () => {
  const {totalNumberOfTodos, numberOfCompletedTodos} = useContext(TodosContext)
  return (
    <div>
      <p>
        <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} Completed
      </p>
    </div>
  );
};

export default Counter;
