import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="bg-amber-100 min-h-screen flex justify-center items-center">
      <main className="bg-white w-[992px] h-[90vh] rounded-lg shadow-lg grid grid-cols-[8fr_4fr] grid-rows-[60px_1fr]">
        <Header/>

        <TodoList/>

        <Aside/>
      </main>
    </div>
  );
}

export default App;
