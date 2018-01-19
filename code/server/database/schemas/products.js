/**
 * Our Schema for Products
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Products Schema
var productSchema = new Schema({
    furniture:
    [ { Seating: [Array] },
      { Relaxing: [Array] },
      { Tables: [Array] },
      { 'Storage/Shelving': [Array] },
      { 'Multimedia Furniture': [Array] },
      { 'Bedroom Furniture': [Array] },
      { Complementary: [Array] },
      { Office: [Array] },
      { Hallway: [Array] },
      { 'Kids Furniture': [Array] },
      { 'Laundry Room': [Array] },
      { 'Fiteness Room': [Array] } ]
});

// A method that's called every time a user document is saved..
productSchema.pre('save', function (next) {

    var product = this;

    if (!product.isModified('furniture')) {
        return next();
    }

    
});

// The primary product model
var Product = mongoose.model('Product', productSchema);

module.exports = Product;