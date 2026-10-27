const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const doctorsRoutes = require('./routes/doctors');
const appointmentsRoutes = require('./routes/appointments');

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/appointments', appointmentsRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Gavxar Clinic API is running', clinic: 'Gavxar Clinic' });
});

app.listen(PORT, () => {
  console.log(`Gavxar Clinic Backend running on port ${PORT}`);
});
