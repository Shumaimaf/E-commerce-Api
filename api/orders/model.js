const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    costumerName: {
        type: String,
        required: true,
    },

    costumerEmail: {
        type: String,
        required: true,
    },
    costumerID: {
        type: String,
        required: true,
    },
    costumerContact: {
        type: String,
        required: true,
    },
    costumerAddress: {
        type: String,
        required: true,
    },
    order: {
        type: Array,
        required: true,
    },
    order_at: {
        type: Date,
        default: Date.now
    }
})

const Orders = model('order', OrderSchema)
module.exports = Orders