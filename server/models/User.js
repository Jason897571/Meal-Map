const {Schema, model } =  require('mongoose');
const bcrypt = require('bcrypt');

const reviewSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  locationId: {
    type: String,
    required: true,  
  },
  rating: {
      type: Number,
      required: true,
  },
  review: {
      type: String,
      required: false,
  }
  
});

const donationSchema = new Schema({
  donationDate: {
    type: Date,
    default: Date.now,
  },

  donationAmount: {
      type: Number,
      required: true,
  },
})

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

   favoriteRestaurants: {
    type: [String],
    default: []
  },
  
  reviews: {
    type: [reviewSchema],
    default: []
  },
  donation:{
    type: [donationSchema],
    default: []
  }
  
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;

