const express = require('express');
const router = express.Router();

const doctors = [
  { id: 1, name: 'Dr. Aliyeva Nodira', specialty: 'Terapevt', experience: '12 yil' },
  { id: 2, name: 'Dr. Karimov Jasur', specialty: 'Kardiolog', experience: '8 yil' },
  { id: 3, name: 'Dr. Rahimova Malika', specialty: 'Pediatr', experience: '10 yil' },
  { id: 4, name: 'Dr. Toshmatov Akmal', specialty: 'Stomatolog', experience: '15 yil' },
];

router.get('/', (req, res) => {
  res.json(doctors);
});

router.get('/:id', (req, res) => {
  const doctor = doctors.find(d => d.id == req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Topilmadi' });
  res.json(doctor);
});

module.exports = router;
