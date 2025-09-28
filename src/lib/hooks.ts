import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

const useTodoContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }

  return context;
};

export { useTodoContext };
