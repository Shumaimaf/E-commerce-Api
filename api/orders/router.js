const app = require('express')
const router = app.Router()
const { orderPlace } = require('./controller')

router.post('/place-order', orderPlace)
// router.get('/get-all-orders', allOrders)
// router.get('/track-order/:_id', trackOrder)


module.exports = router