export default function Item({ task, onDone }) {
  return (
    <>
      <div className="listItems">
        {task.map((item) => (
          <li>
            <input
              type="checkbox"
              value={item.done}
              onChange={() => onDone(item.id)}
            />

            <span style={item.done ? { textDecoration: "line-through" } : {}}>
              {item.task}
            </span>
          </li>
        ))}
      </div>
    </>
  );
}
