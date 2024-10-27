// server.js
const express = require('express');
const connectDB = require('./config/db');

const dotEnv = require('dotenv');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

dotEnv.config()

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
