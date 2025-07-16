const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;
const coro={
origin: 'http://localhost:5173',
method:['GET','POST','PUT','DELETE'],
credentials: true,
optionSuccesssStatus:200
}
app.use(cors(coro))
app.use(express.json());

let users = [
  { id: 121, name: 'Vikram' },
  { id: 122, name: 'Praveen' }
];

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Get all users
app.get('/api/users', (req, res) => res.json(users));

// Add new user
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  const newUser = { id: Date.now(), name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find(u => u.id == id);
  if (user) {
    user.name = name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
