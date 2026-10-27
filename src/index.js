const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Gavxar Clinic API is running', clinic: 'Gavxar Clinic' });
});

// Sample routes (will expand)
app.get('/api/doctors', (req, res) => {
  res.json([
    { id: 1, name: 'Dr. Aliyeva Nodira', specialty: 'Terapevt' },
    { id: 2, name: 'Dr. Karimov Jasur', specialty: 'Kardiolog' },
    { id: 3, name: 'Dr. Rahimova Malika', specialty: 'Pediatr' },
  ]);
});

app.post('/api/appointments', (req, res) => {
  const { doctor, time, patient } = req.body;
  res.status(201).json({ 
    success: true, 
    message: 'Navbat qabul qilindi', 
    data: { doctor, time, patient } 
  });
});

app.listen(PORT, () => {
  console.log(`Gavxar Clinic Backend running on port ${PORT}`);
});
