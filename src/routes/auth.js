const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { phone, password } = req.body;
  // Hozircha oddiy
  res.json({
    success: true,
    token: 'fake-jwt-token-for-now',
    user: { phone, role: 'patient' }
  });
});

router.post('/register', (req, res) => {
  res.json({ success: true, message: 'Ro\'yxatdan o\'tildi' });
});

module.exports = router;
