const express = require('express')
const router = express.Router()

// middlewares
router.use('/', (_, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

// routes
// router.get('/', (req, res) => {
//   res.end('Will send all the nations to you!');
// });

// router.post('/', (req, res) => {
//   res.end('Will add the nation: ' + req.body.name + ' with details: ' + req.body.description);
// });

// router.put('/', (req, res) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /nations');
// });

// router.delete('/', (req, res) => {
//   res.end('Deleting all nations');
// });

router.get('/:nationId', (req, res) => {
  res.send('Will add the nation: ' + req.body.name + ' with details: ' + req.body.description)
})

router.put('/:nationId', (req, res) => {
  res.write('Updating the nation: ' + req.params.nationId + '\n');
  res.end('Will update the nation: ' + req.body.name + ' with details: ' + req.body.description);
})

router.post('/:nationId', (req, res) => {
  res.statusCode = 403;
  res.send('POST operation not supported on /nations/' + req.params.nationId);
})

router.delete('/:nationId', (req, res) => {
  res.end('Deleting nation: ' + req.params.nationId);
})


module.exports = router;