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

