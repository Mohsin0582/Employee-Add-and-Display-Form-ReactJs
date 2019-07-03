const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
	name: {
            type: String,
            required: true
        },
	phoneNumber: {type: String},
	address: {type: String},
	gender: {type: String},
    shortBio: {type: String},
    customFile:{type : String}
    /*
    created: {
        type: Date,
        default: Date.now,
      }
     */ 
});

module.exports = mongoose.model('Contacts', contactSchema);