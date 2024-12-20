const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');
const app = express();
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

// Database Connection
mongoose.connect(MONGO_URI, {
  
}).then(() => console.log('Database connected!'))
  .catch(err => console.error(err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});