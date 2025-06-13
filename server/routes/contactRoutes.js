const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.get('/', contactController.getAllContacts);
router.put('/:id/status', contactController.updateContactStatus);

module.exports = router; 