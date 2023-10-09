import { useState } from "react";

export default function Form({ onAddItem }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!task) {
      return;
    }

    const tasks = { task, done: false, id: Date.now() };
    onAddItem(tasks);

    setTask("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add to do ...."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add task</button>
      </form>
    </div>
  );
}
