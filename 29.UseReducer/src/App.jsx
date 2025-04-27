import React, { useReducer, useState, useEffect } from "react";
import "./App.css";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

function userReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: Date.now(), ...action.payload }];
    case "UPDATE":
      return state.map(user =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    case "DELETE":
      return state.filter(user => user.id !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState({ id: null, name: "", surname: "" });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [state]);

  const handleCreate = () => {
    if (name.trim() && surname.trim()) {
      dispatch({ type: "CREATE", payload: { name, surname } });
      setName("");
      setSurname("");
    }
  };

  const openEditModal = (user) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (editUser.name.trim() && editUser.surname.trim()) {
      dispatch({ type: "UPDATE", payload: editUser });
      setIsModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="container">
      <h1>User manager</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button onClick={handleCreate}>Add</button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>

      <ul className="user-list">
        {state.map(user => (
          <li key={user.id} className="user-item">
            {user.name} {user.surname}
            <button onClick={() => openEditModal(user)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => handleDelete(user.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <h2>Edit user</h2>
          <input
            type="text"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            value={editUser.surname}
            onChange={(e) => setEditUser({ ...editUser, surname: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsModalOpen(false)} className="close-btn">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
