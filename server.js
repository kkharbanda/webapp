const express = require('express');
const connectDb = require('./config/db');
const app = express();

connectDb();
app.use(express.json({}));
app.get("/hello", (req, res) => res.send("Welcome to the app!"));

// app.get("/", (req, res) => res.send("Hello World!"));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Listining on port ${port}`));