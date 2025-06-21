import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

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
