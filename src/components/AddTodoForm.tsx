import Button from "./Button";

const AddTodoForm = () => {
  return (
    <form>
      <h3 className="mb-2">Add a todo</h3>
      <input
        type="text"
        className="w-full mb-2 border border-neutral-400 rounded p-2 outline-0"
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddTodoForm;
