import React, { useState } from "react";

function Header({ addItem }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addItem(text);
    setText("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
