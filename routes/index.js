module.exports = app => {

    const rentalRoutes = require("./rental.routes")
    app.use('/api/rental', rentalRoutes)

    const authRoutes = require("./auth.routes")
    app.use('/api/auth', authRoutes)

    const userRoutes = require("./user.routes")
    app.use('/api/user', userRoutes)



    const uploadRoutes = require("./upload.routes")
    app.use('/api/upload', uploadRoutes)
}
