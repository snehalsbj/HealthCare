const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route to add a new service
router.post('/services', serviceController.addService);

// Route to get all services
router.get('/services', serviceController.getAllServices);

// Route to update a service
router.put('/services/:id', serviceController.updateService);

// Route to delete a service
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
