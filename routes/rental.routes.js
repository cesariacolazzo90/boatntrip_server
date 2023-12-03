const router = require("express").Router()
const Rental = require('../models/Rental.model')
const { verifyToken } = require('../middlewares/verifyToken')
const RentalModel = require("../models/Rental.model")

router.get("/allRentals", (req, res) => {

    Rental
        .find()
        .sort({ title: 1 })
        .select({ title: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/rentalsByOwner/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params

    Rental
        .find({ owner: user_id })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/newRentalCreated", verifyToken, (req, res, next) => {

    const { title, date, city, description } = req.body
    const { _id: owner } = req.payload
    const { name: dueno } = req.payload

    Rental
        .create({ title, date, city, description, owner, dueno })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})





router.put("/edit/:rental_id", (req, res, next) => {
    const { rental_id } = req.params
    const { title, date, city } = req.body

    Rental

        .findByIdAndUpdate(rental_id, { title, date, city })
        .then(response => res.json(response))
        .catch(err => next(err))

})


router.post("/delete/:rental_id", (req, res, next) => {

    const { rental_id } = req.params

    Rental
        .findByIdAndDelete(rental_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})





router.get("/:rental_id", verifyToken, (req, res, next) => {

    const { rental_id } = req.params

    Rental
        .findById(rental_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router