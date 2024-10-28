import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      <motion.h1
        className="font-bold text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Plan Of Attack.
      </motion.h1>

      <motion.div
        className="w-2/4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border border-gray-300 flex flex-row items-center rounded-lg px-2 shadow-md">
          <FaSearch className="text-gray-500" />
          <input
            className="border-none w-full h-full py-2 px-2 text-lg focus:outline-none"
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={handleSearch}
            whileFocus={{ scale: 1.02, backgroundColor: "#f7f7f7" }}
          />
          <IoMdAddCircle
            className="text-3xl cursor-pointer text-pink-500 hover:text-pink-600 transition-all duration-200"
            onClick={addTodo}
          />
        </div>
      </motion.div>

      <div className="w-2/4 space-y-4">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              todos={todos}
              index={index}
              setTodos={setTodos}
            />
          ))
        ) : (
          <div className="text-gray-500 text-center">No tasks added yet!</div>
        )}
      </div>
    </div>
  );
};

export default App;
