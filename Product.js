const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String },
  inStock: { type: Boolean }
});

module.exports = mongoose.model('Product', productSchema);