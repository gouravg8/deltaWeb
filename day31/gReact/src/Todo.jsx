import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  return (
    <>
      <InputFields />
    </>
  );
}

function InputFields() {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo() {
    setTodoList((prev) => [...prev, { todo: inputTodo, key: uuidv4() }]);
    setInputTodo("");
  }

  function deleteTodo(key) {
    setTodoList((prev) => prev.filter((todo) => todo.key != key));
  }
  return (
    <>
      <div className="flex flex-col justify-center gap-3 align-middle w-fit md:flex-row">
        <input
          className="px-4 border border-1"
          type="text"
          name="inputTodo"
          id=""
          placeholder="Enter your todo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button
          className="px-2 py-1 font-semibold text-white bg-blue-600"
          type="submit"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      <div className="my-8 Todolist">
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.key}
              className="flex justify-around my-3 align-middle"
            >
              <span>{todo.todo}</span>
              <button
                onClick={() => deleteTodo(todo.key)}
                className="px-2 py-1 text-white bg-blue-600 rounded"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
