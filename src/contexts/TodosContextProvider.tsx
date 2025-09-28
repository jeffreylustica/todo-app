import React, { createContext, useEffect, useState } from "react";
import type { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Log in to add more thank 3 todos");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: prev.length + 1, text: todoText, isCompleted: false },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
