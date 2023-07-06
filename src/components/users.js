import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => (
            <Link to={`/users/${user.id}`} className="user-card" key={user.id}>
              <img className="user-avatar" src={user.avatar} alt="User Avatar" />
              <div className="user-details">
                <p className="user-name">{`${user.first_name} ${user.last_name}`}</p>
                <p className="user-email">{user.email}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default Users;
