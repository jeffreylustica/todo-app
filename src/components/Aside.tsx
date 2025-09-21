import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Aside = ({handleAddTodo}) => {
  return (
    <aside className="col-[2/3] row-[2/3] bg-neutral-100 p-2 flex flex-col">
      <AddTodoForm handleAddTodo={handleAddTodo}/>

      <div className="mt-auto">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </aside>
  );
};

export default Aside;
