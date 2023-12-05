const router = require("express").Router()
const Rental = require('../models/Rental.model')
const { verifyToken } = require('../middlewares/verifyToken')


router.get("/allRentals", (req, res) => {

    Rental
        .find()
        .sort({ title: 1, city: 1 })
        .select({ title: 1, city: 1, dueno: 1, imageUrl: 1, participants })
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

    const { title, date, city, description, imageUrl } = req.body
    const { _id: owner } = req.payload
    const { name: dueno } = req.payload

    Rental
        .create({ title, date, city, description, owner, dueno, imageUrl })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})





router.put("/edit/:rental_id", verifyToken, (req, res, next) => {
    const { rental_id } = req.params
    const { title, date, city, imageUrl } = req.body

    Rental

        .findByIdAndUpdate(rental_id, { title, date, city, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))

})


router.delete("/delete/:rental_id", verifyToken, (req, res, next) => {

    const { rental_id } = req.params

    Rental
        .findByIdAndDelete(rental_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})


router.get('/searchCity', (req, res, next) => {

    const { city } = req.query

    Rental
        // .find({ type: new RegExp(`^${searchQuery}`, 'i') })
        .find({ city })
        .then(response => res.json(response))
        .catch(err => next(err))

})


router.put('/joinRental/:rental_id', verifyToken, (req, res, next) => {
    console.log("-----------------", req.params)
    console.log("-----------------", req.payload)
    const { rental_id } = req.params
    const { _id } = req.payload

    Rental
        .findByIdAndUpdate(rental_id, { $addToSet: { participants: _id } })
        .then(() => res.sendStatus(200))
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