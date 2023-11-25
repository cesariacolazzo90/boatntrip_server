const router = require("express").Router()
const Booking = require("../models/Booking.model")





const Booking = require('./../models/Booking.model')

router.get("/AllBookings", (req, res) => {

    Booking
        .find()
        .sort({ title: 1 })
        .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1500))
        .catch(err => next(err))
})


router.get("/booking/:booking_id", (req, res, next) => {

    const { booking_id } = req.params

    Booking
        .findById(booking_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/placeBooking", (req, res, next) => {

    const { title, date, place, description, boat } = req.body

    Booking
        .create({ title, date, place, description, boat })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router