/* Schema for the Item document */

const mongoose = require("mongoose")

const itemSchema = mongoose.Schema(
    {
        id:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
       /* image: {
            type: Array,
            required: true
        },*/
        quantity: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Item", itemSchema)