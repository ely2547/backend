const mongoose = require("mongoose");

// Creamos el esquema de los productos
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre del producto
  description: { type: String, required: true }, // Descripción del producto
  price: { type: Number, required: true }, // Precio del producto
  quantity: { type: Number, required: true }, // Cantidad disponible del producto
  category: { type: String, required: true }, // Categoría del producto
  image: { type: String, required: true }, // URL de la imagen del producto
});

// Creamos el modelo de los productos a partir del esquema
const Product = mongoose.model("Product", productSchema);

// Exportamos el modelo
module.exports = Product;
