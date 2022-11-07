const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String
    },
    content: {
        type: Array
    },
    isSeries: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("List", ListSchema);