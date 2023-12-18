const router = require("express").Router()
const User = require('../models/User.model')

const { verifyToken } = require('../middlewares/verifyToken')

router.get("/allUsers", (req, res, next) => {

    User
        .find()
        .sort({ name: 1, city: 1, imageUrl: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})





router.get("/profile", verifyToken, (req, res, next) => {

    console.log('-------------------PAULOAD', req.payload)
    const { _id } = req.payload


    User
        .findById(_id)
        .populate('rentals')
        .then(response => res.json(response))
        .catch(err => next(err))

})



router.put("/editMyProfile", verifyToken, (req, res, next) => {



    const { user_id: _id } = req.payload
    const { email, name, imageUrl, city } = req.body



    User
        .findByIdAndUpdate(loggedUser._id, { email, name, imageUrl, city })
        .then(response => {
            res.json(response)
        })
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
    const { email, name, imageUrl, bankAccount, city } = req.body


    User
        .findByIdAndUpdate(user_id, { email, name, imageUrl, bankAccount, city })
        .then(response => res.json(response))
        .catch(err => next(err))
})



router.get('/findByCity', (req, res, next) => {

    const { city } = req.query

    User
        // .find({ type: new RegExp(`^${searchQuery}`, 'i') })
        .find({ city })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete("/delete/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))





})




module.exports = router