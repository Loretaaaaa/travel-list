import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [item, ...prevItems]);
  }

  function handleRemoveItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearLst () {
    const confirmed = window.confirm("Are you sure you want to clear the list?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearLst}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
