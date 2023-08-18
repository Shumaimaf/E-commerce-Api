const Orders = require('./model');
const { connect } = require('mongoose');

const orderPlace = async (req, res) => {
    const {
        costumerName, costumerEmail, costumerID, costumerContact, costumerAddress, order
    } = req.body

}

module.exports = { orderPlace}