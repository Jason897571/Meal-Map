const {Schema, model } =  require('mongoose');


const resturantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
   
  },
  
});

const Resturant = model('Resturant', resturantSchema);
module.exports = Resturant;