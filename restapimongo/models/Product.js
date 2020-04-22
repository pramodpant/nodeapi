const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema ({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    operatingSystem: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true

    }
});

module.exports = mongoose.model("products",ProductSchema);