const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

router.post('/', async (req, res) => {
  const { latitude, longitude, userId } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const location = new Location({ latitude, longitude, userId });
    await location.save();
    res.status(200).json({ message: 'Location saved' });
  } catch (err) {
    console.error('Error saving location:', err);
    res.status(500).json({ error: 'Failed to save location' });
  }
});

module.exports = router;
