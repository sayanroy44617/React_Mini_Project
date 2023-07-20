import React, { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleOnClick = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleRemoveTasks = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskState = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <p className="p pt-5 text-3xl font-mono text-center">TO-DO List</p>

      <div className="mt-5 flex justify-center items-center ">
        <input
          className="border border-black"
          type="text"
          placeholder="enter your todo here "
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p ps-2 pr-2 ml-3 rounded-lg bg-gray-600 text-white"
          onClick={handleOnClick}
        >
          Add task
        </button>
      </div>

      <div className="mt-5 grid gap-4 justify-center">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center border border-gray-400 p-2 rounded-md w-96"
          >
            <input
              className="col-span-1 mr-4"
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTaskState(index)}
            />
            <span
              className={`col-span-1 ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {t.text}
            </span>

            <button
              className="col-span-1 bg-blue-700 text-white rounded-xl ms-3 p-3 pt-0 pb-0"
              onClick={() => handleRemoveTasks(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
