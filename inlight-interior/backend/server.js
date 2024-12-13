const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory user storage (for demonstration)
let users = [];

// Secret key for JWT
const SECRET_KEY = 'your_secret_key'; // Change this in production!

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Inlight Interior API. Use /register to register and /login to access your account.');
});

// User registration route (POST)
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
});

// Login route (POST)
app.post('/login', async (req, res) => {
    console.log(req.body); // Log the request body for debugging
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Get all users (GET, for debugging purposes)
app.get('/users', (req, res) => {
    res.json(users);
});

// Protect a sample route (GET)
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});