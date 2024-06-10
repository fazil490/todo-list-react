import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleAddTask() {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }
  function handleRemoveTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }
  return (
    <div className="main">
      <h1 className="header">To-Do List Component</h1>
      <div className="input">
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button className="btn btn-add" onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="output">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="btn btn-del" onClick={() => handleRemoveTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
