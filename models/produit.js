const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true } // Champ pour l'URL de l'image
});

const Product = mongoose.model('Produit', produitSchema);

module.exports = Product;