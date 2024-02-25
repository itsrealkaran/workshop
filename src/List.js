import React from "react";

function List({ items, deleteItem }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.text}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;
