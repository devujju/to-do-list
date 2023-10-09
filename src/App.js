import { useState } from "react";
import Form from "./Components/Form";
import Item from "./Components/Items";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function onDone(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function onClear() {
    setItems([]);
  }

  return (
    <div>
      <h1>Add TODO list</h1>
      <Form onAddItem={handleAddItems} />
      <Item task={items} onDone={onDone} />
      <button onClick={onClear} className="bottom">
        Clear task
      </button>
    </div>
  );
}

export default App;
