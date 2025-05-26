// routes/location.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { latitude, longitude, userId } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  console.log(`Received location: ${latitude}, ${longitude} from user ${userId || 'unknown'}`);

  res.status(200).json({ message: 'Location received' });
});

module.exports = router;
