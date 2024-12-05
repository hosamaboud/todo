import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  editingId,
  editValue,
  onEdit,
  onEditChange,
  onSave,
  onCancel,
  onComplete,
  onDelete,
}) => {
  if (!todos || todos.length === 0) {
    return <p className="empty-list">No tasks available. Add a new task!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editValue={editValue}
          onEdit={onEdit}
          onSave={onSave}
          onCancel={onCancel}
          onEditChange={onEditChange}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
