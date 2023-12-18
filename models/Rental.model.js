const { Schema, model } = require("mongoose");

const rentalSchema = new Schema(

    {
        title: {
            type: String,
            required: [false]
        },
        date: {
            type: Date,
            required: [false]
        },
        city: {
            type: String
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        },
        description: {
            type: String,
            required: false
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',

        },
        dueno: {
            type: String

        },
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],


        price: {
            type: Number,
            required: false

        },
        imageUrl: {
            type: String
        },
        boatType: {
            type: String
        },


    },
    {
        timestamps: true
    }
)

rentalSchema.index({ location: '2dsphere' })

module.exports = model('Rental', rentalSchema)