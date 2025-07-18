import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      });
  }, []);

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [users, sortAsc]);

  return (
    <div>
      <button onClick={() => setSortAsc(prev => !prev)}>
        Sort by Name ({sortAsc ? 'ASC' : 'DESC'})
      </button>
      {loading ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
          </thead>
          <tbody>
            {sortedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
