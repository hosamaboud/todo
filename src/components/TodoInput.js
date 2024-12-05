import { FaPlus } from 'react-icons/fa';

const TodoInput = ({
  value,
  onChange,
  onAdd,
  placeholder = 'Enter task...',
  buttonLabel = <FaPlus />,
}) => {
  const isDisabled = value.trim() === '';

  return (
    <div className="todo">
      <h1>ToDo App</h1>
      <input
        type="text"
        className="todos-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (!isDisabled) onAdd();
          }
        }}
        aria-label="Task input field"
      />
      <button
        className="add-btn"
        onClick={onAdd}
        disabled={isDisabled}
        aria-label="Add task"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default TodoInput;
