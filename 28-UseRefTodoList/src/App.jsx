import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      toast.warning("Boş todo əlavə edilə bilməz");
      return;
    }

    if (editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: inputValue } : todo
        )
      );
      toast.success("Todo yeniləndi");
      setEditId(null);
    } else {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      toast.success("Yeni todo əlavə edildi");
    }

    setInputValue('');
    inputRef.current.focus();
  };

  const handleToggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.info("Todo statusu dəyişdi");
  };

  const handleClearTodos = () => {
    setTodos([]);
    toast.success("Bütün todolar silindi");
  };

  const handleEdit = (todo) => {
    setInputValue(todo.text);
    setEditId(todo.id);
    inputRef.current.focus();
  };

  return (
    <div>
    <ToastContainer />
    <h1 className="">Todo List</h1>
    <div >
      <div className={styles.inputGroup}>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Todo əlavə et"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo} className={styles.addBtn}>
          {editId ? "Update" : "Add Todo"}
        </button>
      </div>

        <ul className="list-group">
          {todos.map((todo, index) => (
          <li
          key={todo.id}
          className={`${styles.todoItem} ${todo.completed ? styles.todoCompleted : styles.todoIncomplete}`}
        >
              <span>
                <strong>{index + 1}.</strong> {todo.text}
              </span>
              <div>
                <button
                  className={`${styles.editBtn}`}
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                {!todo.completed && (
                 <button
                 className={`${styles.editBtn}` }
                 onClick={() => handleEdit(todo)}
               >
                 Edit
               </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div>
          <button onClick={handleClearTodos} className={`${styles.deleteBtn}` }>
            Delete All Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
