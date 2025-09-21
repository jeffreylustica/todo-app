import { useState } from "react";
import Button from "./Button";

const AddTodoForm = ({handleAddTodo}) => {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo(todo)
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-2">Add a todo</h3>
      <input
        type="text"
        className="w-full mb-2 border border-neutral-400 rounded p-2 outline-0"
        onChange={handleChange}
        value={todo}
        required
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddTodoForm;
