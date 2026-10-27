const express = require('express');
const router = express.Router();

let appointments = [];

router.get('/', (req, res) => {
  res.json(appointments);
});

router.post('/', (req, res) => {
  const { doctor, time, patient } = req.body;
  const newAppointment = {
    id: appointments.length + 1,
    doctor,
    time,
    patient: patient || 'Bemor',
    createdAt: new Date().toISOString()
  };
  appointments.push(newAppointment);
  res.status(201).json({ success: true, data: newAppointment });
});

module.exports = router;
