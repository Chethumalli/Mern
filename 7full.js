<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form action="/login" method="post">
        <label for="email_id">Email:</label>
        <input type="email" id="email_id" name="email_id" required>
        <br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br><br>

        <button type="submit">Login</button>
    </form>
</body>
</html>
/////////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.')); // Serve static files (like index.html)

// Hardcoded user for demo (for real apps, use a database!)
const users = [
    { email_id: 'mernlab@gmail.com', password: 'test@123' }
];

// Route to serve the login form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle login POST request
app.post('/login', (req, res) => {
    const { email_id, password } = req.body;
    const user = users.find(u => u.email_id === email_id && u.password === password);

    if (user) {
        res.send(`Login successful! Welcome, ${email_id}.`);
    } else {
        res.status(401).send('Invalid email or password!');
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

