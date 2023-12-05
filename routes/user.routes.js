const router = require("express").Router()
const User = require('../models/User.model')

const { verifyToken } = require('../middlewares/verifyToken')

router.get("/allUsers", (req, res) => {

    User
        .find()
        .sort({ name: 1, imageUrl: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/details/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))
})

router.put("/edit/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params
    const { email, name, password, imageUrl } = req.body

    User
        .findByIdAndUpdate(user_id, { email, name, password, imageUrl })
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


module.exports = router