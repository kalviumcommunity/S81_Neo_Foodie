const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 14
    }
});

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    review: {
        rating: Number,
        likes: Number,
        price: Number
    }
});

const UserModel = mongoose.model("user", userSchema);
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel, UserModel };
