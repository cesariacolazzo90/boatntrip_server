const { Schema, model } = require("mongoose");

const rentalSchema = new Schema(

    {
        title: {
            type: String,
            required: [true, 'Let the owner understand your need']
        },
        date: {
            type: Date,
            required: [true, 'Date is required']
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
            required: true
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