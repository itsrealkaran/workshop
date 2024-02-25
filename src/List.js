import React from "react";

function List({ items, deleteItem }) {
  return (
    <div className="List">
      {/*Checking if the value is empty.*/}
      {items == "" && <p>-- No Task --</p>}
      {items.map((item) => (
        <div className="ListItem" key={item.id}>
          {item.text}
          <button
            style={{
              color: "#ff0000",
              backgroundColor: "#fcdada",
              borderRadius: "50%",
              border: "None",
            }}
            onClick={() => deleteItem(item.id)}
          >
            <i class="fa fa-trash-o"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
