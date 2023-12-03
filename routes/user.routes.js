const router = require("express").Router()
const User = require('../models/User.model')

const { verifyToken } = require('../middlewares/verifyToken')

router.get("/allUsers", (req, res) => {

    User
        .find()
        .sort({ name: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/details/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params

    console.log({ user_id })
    User
        .findById(user_id)
        .then(response => {
            console.log({ response })
            res.json(response)
        })
        .catch(err => next(err))



})

router.post('/user')


router.post("/edit/:user_id", verifyToken, (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, { email, name, password })
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router