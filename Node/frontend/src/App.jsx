import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async e => {
    e.preventDefault();
    if (!name.trim()) return;
    await axios.post('http://localhost:5000/api/users', { name });
    setName('');
    fetchUsers();
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const updateUser = async (id) => {
    if (!editingName.trim()) return;
    await axios.put(`http://localhost:5000/api/users/${id}`, { name: editingName });
    setEditingId(null);
    fetchUsers();
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Add user"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editingId === user.id ? (
              <>
                <input
                  value={editingName}
                  onChange={e => setEditingName(e.target.value)}
                />
                <button onClick={() => updateUser(user.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {user.name} (ID: {user.id})
                <button onClick={() => { setEditingId(user.id); setEditingName(user.name); }}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
