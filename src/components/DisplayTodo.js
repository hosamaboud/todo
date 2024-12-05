import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';
const DisplayTodo = ({
  todos = [],
  sort,
  onSort,
  isFilterClicked,
  onComplete,
  onDelete,
  onEdit,
  isEditing,
  editValue,
  onEditChange,
  onCancel,
  onSave,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (sort === 'active') return !todo.completed;
    if (sort === 'complete') return todo.completed;
    return true;
  });
  const handleEdit = (todo) => onEdit(todo.id, todo.item);

  return (
    <div className="displayTodos">
      <div>
        <div className="btns">
          <button onClick={() => onSort('active')}>Active</button>
          <button onClick={() => onSort('complete')}>Complete</button>
          <button onClick={() => onSort('all')}>All</button>
        </div>
        <ul className="todo-list">
          <AnimatePresence>
            {isFilterClicked &&
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onComplete={() => onComplete(todo.id)}
                  onDelete={() => onDelete(todo.id)}
                  onEdit={(todo) => onEdit(handleEdit)}
                />
              ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default DisplayTodo;
