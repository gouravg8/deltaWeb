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
    setTodoList((prev) => [
      ...prev,
      { todo: inputTodo, key: uuidv4(), isDone: false },
    ]);
    setInputTodo("");
  }

  function deleteTodo(key) {
    setTodoList((prev) => prev.filter((todo) => todo.key != key));
  }

  // eslint-disable-next-line no-unused-vars
  function updateTodo(key) {
    setTodoList((prevTodo) =>
      prevTodo.map((item) =>
        item.key === key
          ? {
              ...item,
              todo: item.todo.toUpperCase(),
            }
          : item
      )
    );
  }

  function doneTodoHandler(key) {
    setTodoList((prevTodo) =>
      prevTodo.map((item) => {
        if (item.key === key) return { ...item, isDone: true };
        else return item;
      })
    );
  }

  function uppercaseAll() {
    setTodoList((prevTodo) =>
      prevTodo.map((item) => ({
        ...item,
        todo: item.todo.toUpperCase(),
      }))
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center gap-3 align-middle w-fit md:flex-row">
        <input
          className="px-2 border border-1"
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
        <button
          className="px-2 py-1 font-semibold text-white bg-blue-600"
          type="submit"
          onClick={uppercaseAll}
        >
          Uppercase
        </button>
      </div>

      <div className="my-8 Todolist">
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.key}
              className="flex justify-around my-3 align-middle "
            >
              <span className={todo.isDone && "line-through"}>{todo.todo}</span>
              <button
                onClick={() => deleteTodo(todo.key)}
                className="px-2 py-1 text-white bg-blue-600 rounded"
              >
                delete
              </button>
              <button
                onClick={() => doneTodoHandler(todo.key)}
                className="px-2 py-1 text-white bg-blue-600 rounded"
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
