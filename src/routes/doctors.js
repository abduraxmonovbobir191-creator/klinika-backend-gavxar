const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

router.get('/', async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    if (doctors.length === 0) {
      // Seed example if empty
      return res.json([
        { id: 1, name: 'Dr. Aliyeva Nodira', specialty: 'Terapevt', experience: '12 yil' },
        { id: 2, name: 'Dr. Karimov Jasur', specialty: 'Kardiolog', experience: '8 yil' },
        { id: 3, name: 'Dr. Rahimova Malika', specialty: 'Pediatr', experience: '10 yil' },
      ]);
    }
    res.json(doctors);
  } catch (error) {
    res.json([
      { id: 1, name: 'Dr. Aliyeva Nodira', specialty: 'Terapevt', experience: '12 yil' },
      { id: 2, name: 'Dr. Karimov Jasur', specialty: 'Kardiolog', experience: '8 yil' },
      { id: 3, name: 'Dr. Rahimova Malika', specialty: 'Pediatr', experience: '10 yil' },
    ]);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!doctor) return res.status(404).json({ message: 'Topilmadi' });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
