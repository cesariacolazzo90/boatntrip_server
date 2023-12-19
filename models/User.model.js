const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true]
    },

    email: {
      type: String,
      unique: true,
      required: [true],
      trim: true,
    },

    password: {
      type: String,
      required: [true],
      //trim: true
    },

    role: {
      type: String,
      enum: ['tourist', 'boatOwner', 'admin'],
      default: 'tourist'
    },

    imageUrl: {
      type: String
    },

    bankAccount: {
      type: String
    },
    city: {
      type: String
    },

  },
  {
    timestamps: true
  },

)

module.exports = model('User', userSchema)

