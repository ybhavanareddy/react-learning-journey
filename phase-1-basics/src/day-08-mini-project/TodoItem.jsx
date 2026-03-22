import React from "react";

function TodoItem({
  todoItem,
  onRemoveTodo,
  onMarkAsCompleted,
  onStartEdit,
  onSaveEdit,
  editingId,
  editText,
  setEditText,
}) {
  const isEditing = editingId === todoItem.id;

  return (
    <li style={{ display: "flex", gap: "10px", margin: "10px" }}>
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p style={{ color: todoItem.completed ? "green" : "red" }}>
          {todoItem.text}
        </p>
      )}

      <button onClick={() => onRemoveTodo(todoItem.id)}>Delete</button>

      <button onClick={() => onMarkAsCompleted(todoItem.id)}>
        {todoItem.completed ? "Completed" : "Mark"}
      </button>

      {isEditing ? (
        <button onClick={() => onSaveEdit(todoItem.id)}>Save</button>
      ) : (
        <button
          onClick={() => onStartEdit(todoItem.id, todoItem.text)}
        >
          Edit
        </button>
      )}
    </li>
  );
}

export default TodoItem;