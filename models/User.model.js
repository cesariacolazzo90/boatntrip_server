const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },


    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true
    },

    role: {
      type: String,
      enum: ['renter', 'letter', 'admin'],
      default: 'renter'
    },

    reservedTravels: {

      type: Schema.Types.ObjectId,
      ref: 'Booking',

    },

    bankAccount: {
      type: Number

    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', userSchema)

