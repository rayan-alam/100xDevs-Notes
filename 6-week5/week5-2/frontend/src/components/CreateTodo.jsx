import { useState } from "react";

export function CreateTodo(props) {
    // creating local state variable
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <br />

      <input
        id="desc"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDesc(event.target.value)}
      />
      <br />
      <br />

      <button
        onClick={() => {
          // Implement CSRF protection and error handling
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then(async (res) => {
              const json = await res.json();
              if (res.ok) {
                alert("Todo added");
              } else {
                alert("Error adding todo");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("An error occurred while adding the todo");
            });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}