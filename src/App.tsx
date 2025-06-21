import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./helpers/fetchTodos";

function App() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <div>
        <button onClick={() => dispatch(fetchTodos())}>Fetch todos</button>
        {todos?.map((todo: unknown) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
