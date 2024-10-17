// const express = require('express');
// const connectDB = require('./config/db');
// const app = express();
// const authRoutes = require('./routes/authRoutes');
// const questionRoutes = require('./routes/questionRoutes');
// require('dotenv').config();

// app.use((req, res) => {
//     res.status(404).send('Route not found');
//   });

// connectDB();

// app.use(express.json());
// app.use('/api/auth', authRoutes);
// app.use('/api/questionnaire', questionRoutes);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const cors = require('cors')
require('dotenv').config();
app.use(cors())

// Connect to the database
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/questionnaire', questionRoutes);

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
