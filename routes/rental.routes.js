const router = require("express").Router()
const Rental = require('../models/Rental.model')
const { verifyToken } = require('../middlewares/verifyToken')


router.get("/allRentals", (req, res) => {

    Rental
        .find()
        .sort({ title: 1, city: 1, participants: 1 })
        .populate("participants")
        .select({ price: 1, title: 1, city: 1, dueno: 1, imageUrl: 1, participants: 1, date: 1, boatType: 1, price: 1 })
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


router.post("/placeBookingOffer", verifyToken, (req, res, next) => {

    const { title, date, city, description, imageUrl, boatType, price } = req.body
    const { _id: owner } = req.payload
    const { name: dueno } = req.payload

    Rental
        .create({ title, date, city, description, owner, dueno, imageUrl, boatType, price })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})





router.post("/newRentalCreated", verifyToken, (req, res, next) => {

    const { title, date, city, description, imageUrl, boatType, price } = req.body
    const { _id: owner } = req.payload
    const { name: dueno } = req.payload

    Rental
        .create({ title, date, city, description, owner, dueno, imageUrl, boatType, price })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})





router.put("/edit/:rental_id", verifyToken, (req, res, next) => {
    const { rental_id } = req.params
    const { title, date, city, imageUrl, price } = req.body

    Rental

        .findByIdAndUpdate(rental_id, { title, date, city, imageUrl, price })
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




router.get('/sortPrice', (req, res, next) => {


    Rental
        .find()
        .sort({ price: - 1 })
        .then(response => res.json(response))
        .catch(err => next(err));
});









router.get('/searchBoat', (req, res, next) => {

    const { boatType } = req.query

    Rental
        // .find({ type: new RegExp(`^${searchQuery}`, 'i') })
        .find({ boatType })
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

router.put('/unjoinrental/:rental_id', verifyToken, (req, res, next) => {

    console.log("correctly_unjoined", req.paramas)
    console.log("correctly_unjoined", req.payload)

    const { rental_id } = req.params
    const { _id } = req.payload
    Rental
        .findByIdAndUpdate(rental_id, { $pull: { participants: _id } })
        .then(responses => res.json(responses))
        .catch(err => next(err))
})





router.get('/filterByPrice', (req, res, next) => {
    const { minPrice, maxPrice } = req.query;

    console.log({ minPrice, maxPrice })

    const filter = { price: {} }

    if (minPrice) {
        filter.price.$gte = minPrice
    }

    if (maxPrice) {
        filter.price.$lte = maxPrice
    }

    Rental
        .find(filter)
        .then(response => res.json(response))
        .catch(err => next(err));
});





router.get("/:rental_id", verifyToken, (req, res, next) => {

    const { rental_id } = req.params

    Rental
        .findById(rental_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router