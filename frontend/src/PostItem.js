import React, { useState } from "react";

function PostItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Title: " + title + "\nDescription: " + description);
  };

  return (
    <div>
      <h2>Post Item</h2>

      <input
        type="text"
        placeholder="Enter item title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PostItem;