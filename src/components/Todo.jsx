import React from "react";
import { motion } from "framer-motion";

const Todo = ({ index, setTodos, todo, todos, completed }) => {
  const toggleComplete = () => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-between bg-gray-100 text-gray-800 py-3 px-4 rounded-lg shadow-md border-l-4 border-pink-500"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          className="mr-2"
        />
        <span
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="text-sm text-pink-500 hover:text-pink-600 transition-all duration-200"
        onClick={() => setTodos(todos.filter((_, i) => i !== index))}
      >
        Remove
      </button>
    </motion.div>
  );
};

export default Todo;
