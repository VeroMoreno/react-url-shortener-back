const { Schema, model } = require('mongoose')
const nanoid = require('nanoid');

const urlSchema = new Schema({
  urlOriginal : {
    type        : String,
    lowercase   : true,
    trim        : true,
    required    : 'Add valid URL'
  },
  urlShort : {
    type: String
  }
});

// Mongoose Method
urlSchema.pre('save', async function(next) {
  this.urlShort = nanoid(5);
  next(); // middleware next, ¡go to other line of code!
});

const Url = model('Urls', urlSchema)
module.exports = Url