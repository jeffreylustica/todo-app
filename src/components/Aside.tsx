import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useTodoContext } from "../lib/hooks";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Aside = () => {
  const { register, login, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();
  const { handleAddTodo } = useTodoContext();

  return (
    <aside className="col-[2/3] row-[2/3] bg-neutral-100 p-2 flex flex-col">
      <AddTodoForm handleAddTodo={handleAddTodo} />

      <div className="mt-auto">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p>Logged in as {user?.email}</p>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Button onClick={login}>Login</Button>
            <Button onClick={register}>Register</Button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
