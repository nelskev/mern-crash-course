import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true    
    },
    image: {
        type: String,
        required: true
    },

}, {
    timestamps: true // created 
});


const Product = mongoose.model('Product', productSchema);
// products

export default Product;