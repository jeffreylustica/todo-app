type CounterProps = {
  totalNumberOfTodos: number,
  numberOfCompletedTodos: number
}

const Counter = ({totalNumberOfTodos, numberOfCompletedTodos}: CounterProps) => {
  return (
    <div>
      <p>
        <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} Completed
      </p>
    </div>
  );
};

export default Counter;
