const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb://localhost:27017/todo', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

app.get('/api/todos', (req, res) => {
  res.json([
    { id: 1, task: 'Learn Express' },
    { id: 2, task: 'Build a ToDo App' }
  ]);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'testuser' && password === 'password123') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
