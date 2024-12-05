import { AiFillEdit } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { IoMdDoneAll } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { motion } from 'framer-motion';

const TodoItem = ({
  todo,
  isEditing,
  editValue,
  onEdit,
  onSave,
  onCancel,
  onEditChange,
  onComplete,
  onDelete,
}) => {
  const handleEdit = () => onEdit(todo.id, todo.item);

  return (
    <motion.li
      initial={{ x: '150vw', transition: { type: 'spring', duration: 0.1 } }}
      animate={{ x: 0, transition: { type: 'spring', duration: 0.6 } }}
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', duration: 0.3 },
      }}
      exit={{
        x: '-160vh',
        transition: { type: 'spring}', duration: 0.6 },
        scale: [1, 0],
      }}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      {isEditing ? (
        <div className="edit-mode">
          <textarea
            value={editValue}
            onChange={onEditChange}
            placeholder="Edit your task..."
            onKeyDown={(e) => e.key === 'Enter' && onSave(todo.id)}
          />
          <div className="edit-btn">
            <motion.button
              whileHover={{ scale: 1.3 }}
              className="save-btn"
              onClick={() => onSave(todo.id)}
            >
              <MdDone />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.3 }}
              className="cancel-btn"
              onClick={onCancel}
            >
              <IoClose />
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <textarea
            className="todo-text"
            readOnly
            value={todo.item}
            onClick={handleEdit}
          />

          <div className="btn_todo">
            <motion.button
              whileHover={{ scale: 1.3 }}
              className="edit-btn"
              onClick={handleEdit}
            >
              <AiFillEdit />
            </motion.button>
            {!todo.completed && (
              <motion.button
                whileHover={{ scale: 1.3 }}
                style={{ color: 'green' }}
                className="complete-btn"
                onClick={() => onComplete(todo.id)}
              >
                <IoMdDoneAll />
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.3 }}
              style={{ color: 'red' }}
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
            >
              <IoClose />
            </motion.button>
          </div>
        </div>
      )}
      {todo.completed && <span className="complete">Done✅</span>}
    </motion.li>
  );
};

export default TodoItem;
