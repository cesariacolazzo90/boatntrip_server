const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(

    {
        title: {
            type: String,
            required: [true, 'Nickname is required']
        },
        date: {
            type: Date,
            required: [true, 'Date is required']
        },
        place: {
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
            type: [],
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        boat: {
            type: [],
        },
        rating: {
            type: [Number],
            default: []



        },
    },
    {
        timestamps: true
    }
)

eventSchema.index({ location: '2dsphere' })

module.exports = model('Booking', bookingSchema)