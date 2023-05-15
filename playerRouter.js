const express = require('express')
const router = express.Router()

// middlewares
router.use('/', (_, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

// routes
router.get('/', (req, res) => {
  res.end('Will send all the players to you!');
});

router.post('/', (req, res) => {
  res.end('Will add the player: ' + req.body.name + ' with details: ' + req.body.description);
});

router.put('/', (req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /players');
});

router.delete('/', (req, res) => {
  res.end('Deleting all players');
});

router.get('/:playerId', (req, res) => {
  res.send('Will add the player: ' + req.body.name + ' with details: ' + req.body.description)
})

router.put('/:playerId', (req, res) => {
  res.write('Updating the player: ' + req.params.playerId + '\n');
  res.end('Will update the player: ' + req.body.name + ' with details: ' + req.body.description);
})

router.post('/:playerId', (req, res) => {
  res.statusCode = 403;
  res.send('POST operation not supported on /players/' + req.params.playerId);
})

router.delete('/:playerId', (req, res) => {
  res.end('Deleting player: ' + req.params.playerId);
})

module.exports = router;