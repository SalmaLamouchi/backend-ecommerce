const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Assurez-vous que le chemin est correct

// Route pour récupérer tous les produits
router.get('/products', productController.getAllProducts);

module.exports = router;