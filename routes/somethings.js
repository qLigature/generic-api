const express = require('express');
const router = express.Router();
const something = require('../controllers/something-controller');

router.post('/', something.createSomething);
router.get('/', something.getAllSomething);
router.get('/:id', something.getSomething);
router.put('/:id', something.updateSomething);
router.delete('/:id', something.deleteSomething);

module.exports = router;
