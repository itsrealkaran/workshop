import React from "react";

function List({ items, deleteItem }) {
  return (
    <div className="List">
      {items.map((item) => (
        <div className="ListItem" key={item.id}>
          {item.text}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;
