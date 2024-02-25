import React from "react";

function List({ items, deleteItem }) {
  return (
    <div className="List">
      {items.map((item) => (
        <div className="ListItem" key={item.id}>
          {item.text}
          <button
            style={{
              color: "#ff0000",
              backgroundColor: "#ff000079",
              border: "None",
            }}
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
