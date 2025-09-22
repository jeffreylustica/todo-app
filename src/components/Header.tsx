import Counter from "./Counter";

type HeaderProps = {
  totalNumberOfTodos: number,
  numberOfCompletedTodos: number
}

const Header = ({totalNumberOfTodos, numberOfCompletedTodos}: HeaderProps) => {
  return (
    <header className="bg-amber-200 px-3 py-4 rounded-t-lg col-[1/3] row-[1/2]] flex justify-between items-center">
      <h3>Logo</h3>
      <Counter totalNumberOfTodos={totalNumberOfTodos} numberOfCompletedTodos={numberOfCompletedTodos}/>
    </header>
  );
};

export default Header;
