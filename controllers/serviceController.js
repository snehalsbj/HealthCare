const Service = require('../models/servieModel');

// Add a new service
exports.addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const newService = new Service({ name, description, price });
    await newService.save();

    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;

    await service.save();
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    await service.remove();
    res.status(200).json({ message: 'Service removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
