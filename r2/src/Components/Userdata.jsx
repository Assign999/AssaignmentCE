// UserList.js
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [hideEmail, setHideEmail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const toggleEmail = (id) => {
    setHideEmail(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          {!hideEmail[user.id] && <p>{user.email}</p>}
          <button onClick={() => toggleEmail(user.id)}>
            {hideEmail[user.id] ? 'Show Email' : 'Hide Email'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
