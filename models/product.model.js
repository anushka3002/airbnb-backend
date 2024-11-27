const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Product name is required']
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: false
    },
    beds: {
        type: Number,
        required: false
    },
    rooms: {
        type: Number,
        required: false
    },
    amenities: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    hostedBy: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: false
    },
    nearby: {
        type: String,
        required: false
    },
    bathrooms: {
        type: Number,
        required: false
    }
},
{
    timestamps: true,
}
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;